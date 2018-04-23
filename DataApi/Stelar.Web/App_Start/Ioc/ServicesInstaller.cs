using Castle.MicroKernel.SubSystems.Configuration;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;
using DAL.Repo;

namespace Stelar.Web.App_Start.Windsor
{
    public class ServicesInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {

            container.Register(Component.For<IAppDbContex>().ImplementedBy<AppDbContex>().LifestylePerWebRequest());
            container.Register(Component.For<IAccountReporsitory>().ImplementedBy<AccountReporsitory>().LifestylePerWebRequest());
            container.Register(Component.For<IUserReporsitory>().ImplementedBy<UserReporsitory>().LifestylePerWebRequest());
            container.Register(Component.For<ITransactionReporsitory>().ImplementedBy<TransactionReporsitory>().LifestylePerWebRequest());
                        


        }
    }
}