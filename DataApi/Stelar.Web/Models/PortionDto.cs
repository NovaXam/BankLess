using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Stelar.Web.Models
{
    public class PortionDto
    {
        public string name { get; set; }
        public string sender { get; set; }
        public string currency { get; set; }
        public double? balance { get; set; }

    }
}