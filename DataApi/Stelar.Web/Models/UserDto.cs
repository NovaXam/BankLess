using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Stelar.Web.Models
{
    public class UserDto
    {
        public string  BSId { get; set; }
        public string  UserName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string StellarKey { get; set; }
    }
}