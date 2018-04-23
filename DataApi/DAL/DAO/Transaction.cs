using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DAO
{
    public class Transaction
    {
        public int Id { get; set; }
        public User Sender { get; set; }
        public User Receiver { get; set; }
        public string Type { get; set; }
        public string Currency { get; set; }
        public double Amount { get; set; }
        public double Balance { get; set; }
        public Portion Portion { get; set; }
        public DateTime Date { get; set; }
    }
}
