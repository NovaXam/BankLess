using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Stelar.Web.Models
{
    public class TransactionDto
    {
        public string id { get; set; }
        public string publicKey { get; set; }
        public string currency { get; set; }
        public string type { get; set; }
        public double amount { get; set; }
        public double balance { get; set; }
        public string portion { get; set; }
        public DateTime date { get; set; }
    }
}