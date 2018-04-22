using Stellar.DAL.DAO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Stellar.DAL.Repo
{
    public interface IAccountReporsitory
    {
        IList<Account> GetAllAccounts();


    }
}
