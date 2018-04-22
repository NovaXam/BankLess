using Castle.Windsor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stelar.Web.App_Start.Windsor
{
    public class ControllerFactory : DefaultControllerFactory
    {
        private readonly IWindsorContainer container;

        public ControllerFactory(IWindsorContainer container)
        {
            this.container = container;
        }

        public override void ReleaseController(IController controller)
        {
            container.Release(controller.GetType());
        }

        protected override IController GetControllerInstance(System.Web.Routing.RequestContext requestContext, Type controllerType)
        {
            return (IController)container.Resolve(controllerType);
        }
    }

}