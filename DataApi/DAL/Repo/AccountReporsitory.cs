using DAL.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repo
{
    public class AccountReporsitory : IAccountReporsitory
    {

        IAppDbContex _dbContex;

        public AccountReporsitory(IAppDbContex dbContex)
        {
            _dbContex = dbContex;
        }

        public IList<StellarAccount> GetAllAccounts()
        {
            return _dbContex.Accounts.ToList();
        }

        public void AddAccount(StellarAccount account)
        {
            _dbContex.Accounts.Add(account);
            _dbContex.SaveChanges();
        }
    }
}
