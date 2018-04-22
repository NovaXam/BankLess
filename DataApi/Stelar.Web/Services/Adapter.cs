using DAL.DAO;
using Stelar.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Stelar.Web.Services
{
    public static class Adapter
    {
        public static UserDto Convert(User user)
        {

            if (user == null)
                return null;

            return new UserDto()
            {

                BSId = user.BSId,
                Email = user.Email,
                Phone = user.Phone,
                StellarKey = user.StellarKey,
                UserName = user.UserName
            };
        }

        public static TransactionDto Convert(Transaction tr)
        {

            if (tr == null)
                return null;

            return new TransactionDto()
            {
                id = tr.Sender?.BSId,
                publicKey = tr.Receiver?.StellarKey,
                currency = tr.Currency,
                type = tr.Type,
                balance = tr.Balance,
                amount = tr.Amount,
                portion = tr.Portion?.Name,
                date = tr.Date
            };
        }

        public static Transaction Convert(TransactionDto tr)
        {

            if (tr == null)
                return null;

            return new Transaction()
            {
                Currency = tr.currency,
                Type = tr.type,
                Balance = tr.balance,
                Amount = tr.amount,
                Sender = null,
                Receiver = null,
                Portion = null
            };
        }

        public static PortionDto Convert(Portion tr)
        {
            if (tr == null)
                return null;

            return new PortionDto()
            {
                name = tr.Name,
                balance = tr.Assets.FirstOrDefault()?.Amount,
                currency = tr.Assets.FirstOrDefault()?.Currency,
                sender = tr.User?.StellarKey
            };
        }


    }
}