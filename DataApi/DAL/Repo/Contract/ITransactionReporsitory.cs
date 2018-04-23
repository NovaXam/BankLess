using DAL.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repo
{
    public interface ITransactionReporsitory
    {

        Transaction GetTransaction(int Id);
        void CreateTransaction(Transaction transaction);
        IList<Transaction> GetUserTransactions(string userId);

        IList<Portion> GetUserPortions(string usevoidrId);

        Portion GetPortionByName(string name);
    }
}
