using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DAO
{
    public class Asset
    {
        public int Id { get; set; }
        public string Currency { get; set; }
        public double Amount { get; set; }
    }
}
