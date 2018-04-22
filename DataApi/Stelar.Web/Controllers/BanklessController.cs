using DAL.DAO;
using DAL.Repo;
using Stelar.Web.Models;
using Stelar.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Stelar.Web.Controllers
{
    public class BanklessController : ApiController
    {

        IAccountReporsitory accountReporsitory;
        IUserReporsitory _userReporsitory;
        ITransactionReporsitory _transactionReporsitory;

        public BanklessController(IAccountReporsitory _accountReporsitory, IUserReporsitory userReporsitory, ITransactionReporsitory transactionReporsitory)
        {

            _accountReporsitory = accountReporsitory;
            _userReporsitory = userReporsitory;
            _transactionReporsitory = transactionReporsitory;
        }

        [System.Web.Mvc.HttpGet()]
        [System.Web.Http.Route("api/Users/{userId}")]
        public UserDto GetUser(string userId)
        {
            var user = _userReporsitory.GetUser(userId);

            return Adapter.Convert(user);
        }

        [System.Web.Mvc.HttpPost()]
        [System.Web.Http.Route("api/Users")]
        public void PostUser(User user)
        {
            _userReporsitory.CreateUser(user);
        }

        [System.Web.Mvc.HttpGet()]
        [System.Web.Http.Route("api/Users/Recipients/{userId}")]
        public IList<UserDto> GetRecipients(string userId)
        {
            var users = _userReporsitory.GetRecipients(userId);

            IList<UserDto> userdtoList = new List<UserDto>();

            foreach (var u in users)
            {
                userdtoList.Add(Adapter.Convert(u));
            }

            return userdtoList;
        }

        [System.Web.Mvc.HttpGet()]
        [System.Web.Http.Route("api/Transactions/{userId}")]
        public IList<TransactionDto> GetTransactions(string userId)
        {
            var trans = _transactionReporsitory.GetUserTransactions(userId);

            IList<TransactionDto> transactionList = new List<TransactionDto>();

            foreach (var t in trans)
            {
                transactionList.Add(Adapter.Convert(t));
            }

            return transactionList;
        }

        /*
        [System.Web.Mvc.HttpPost()]
        [System.Web.Http.Route("api/Transactions")]
        public void PostTransactions(Transaction transaction)
        {
            _transactionReporsitory.CreateTransaction(transaction);
        }
        */
        [System.Web.Mvc.HttpPost()]
        [System.Web.Http.Route("api/Transactions")]
        public void PostTransactions(TransactionDto tr)
        {
            if (tr != null)
            {

                var transaction = new Transaction()
                {
                    Currency = tr.currency,
                    Type = tr.type,
                    Balance = tr.balance,
                    Amount = tr.amount,
                    Date = DateTime.Now
                    
                };

                transaction.Sender = _userReporsitory.GetUser(tr.publicKey);
                transaction.Receiver = _userReporsitory.GetUserByBsId(tr.id);
                transaction.Portion = _transactionReporsitory.GetPortionByName(tr.portion);
                _transactionReporsitory.CreateTransaction(transaction);
            }
        }

        [System.Web.Mvc.HttpGet()]
        [System.Web.Http.Route("api/Portions/{userId}")]
        public IList<PortionDto> GetPortions(string userId)
        {
            var props = _transactionReporsitory.GetUserPortions(userId);


            IList<PortionDto> transactionList = new List<PortionDto>();

            foreach (var p in props)
            {
                transactionList.Add(Adapter.Convert(p));
            }

            return transactionList;
        }


    }
}
