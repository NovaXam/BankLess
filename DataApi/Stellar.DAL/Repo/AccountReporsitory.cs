using Stellar.DAL.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Stellar.DAL.Repo
{
    public class AccountReporsitory : IAccountReporsitory
    {
        public IList<Account> GetAllAccounts()
        {

            using (var db = new AppDbContex("name=TestConnection"))
            {

                return db.Accounts.ToList();
            }
        }
    }
}
