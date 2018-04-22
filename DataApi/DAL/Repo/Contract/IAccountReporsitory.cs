using DAL.DAO;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repo
{
    public interface IAccountReporsitory
    {
        IList<StellarAccount> GetAllAccounts();
        void AddAccount(StellarAccount account);

    }
}
