using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.DAO;

namespace DAL.Repo
{
    public class TransactionReporsitory : ITransactionReporsitory
    {
        IAppDbContex _dbContex;

        public TransactionReporsitory(IAppDbContex dbContex)
        {
            _dbContex = dbContex;
        }

        public void CreateTransaction(Transaction transaction)
        {
            _dbContex.Transactions.Add(transaction);
            _dbContex.SaveChanges();
        }

        public Transaction GetTransaction(int Id)
        {
            return _dbContex.Transactions.Where(t => t.Id == Id).FirstOrDefault();
        }

        public IList<Transaction> GetUserTransactions(string userId)
        {
            return _dbContex.Transactions
                .Include("Sender")
                .Include("Receiver")
                .Include("Portion")
                .Where(t => t.Sender != null && t.Sender.StellarKey == userId).ToList();
        }

        void ITransactionReporsitory.CreateTransaction(Transaction transaction)
        {
            _dbContex.Transactions.Add(transaction);
            _dbContex.SaveChanges();
        }


        public IList<Portion> GetUserPortions(string userId)
        {
            return _dbContex.Portions
                .Include("Assets")
                .Include("User")
                .Where(p => p.User.StellarKey == userId).ToList();
        }

        public Portion GetPortionByName(string name)
        {
            return _dbContex.Portions.Where(p => p.Name == name).FirstOrDefault();
        }
    }
}
