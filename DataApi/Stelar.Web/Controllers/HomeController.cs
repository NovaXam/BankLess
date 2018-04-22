using DAL.DAO;
using DAL.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stelar.Web.Controllers
{
    public class HomeController : Controller
    {
        IAccountReporsitory accountReporsitory;
        public HomeController(IAccountReporsitory _accountReporsitory)
        {

            accountReporsitory = _accountReporsitory;
        }

        public ActionResult Index()
        {

            var acc = new StellarAccount
            {
                Address = "test"
            };
            accountReporsitory.AddAccount(acc);

            var acc2 = accountReporsitory.GetAllAccounts();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

    }
}