﻿using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Mvc;

namespace Stelar.Web.App_Start.Windsor
{
    public class ControllersInstaller : IWindsorInstaller
    {

        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromThisAssembly()
                                   .BasedOn<IController>()
                                   .LifestyleTransient());

            container.Register(Classes
                                   .FromThisAssembly()
                                   .BasedOn<IHttpController>()
                                   .LifestyleScoped());
        }
    }
}