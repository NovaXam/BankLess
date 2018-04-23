using Castle.Facilities.TypedFactory;
using Castle.MicroKernel.Registration;
using Castle.Windsor;
using Stelar.Web.App_Start.Windsor;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Mvc;

namespace Stelar.Web.App_Start
{
    public class IocConfig
    {

        public static IWindsorContainer RegisterIoc(HttpConfiguration config)
        {
            var container = new WindsorContainer();

            container.AddFacility<TypedFactoryFacility>();

            config.Formatters.JsonFormatter.SupportedMediaTypes
                             .Add(new MediaTypeHeaderValue("application/json"));

            var controllerFactory = new ControllerFactory(container);
            ControllerBuilder.Current.SetControllerFactory(controllerFactory);

            container.Register(Classes.FromAssemblyContaining<DAL.DAO.StellarAccount>()
                            .Where(Component.IsInSameNamespaceAs<DAL.DAO.StellarAccount>())
                            .WithService.DefaultInterfaces()
                            .LifestyleTransient());

            container.Install(new ServicesInstaller(), new ControllersInstaller());
            config.DependencyResolver = new WindsorDependencyResolver(container);

            return container;
        }
    }
}