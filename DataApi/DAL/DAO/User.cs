﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DAO
{
    public class User
    {
        public int Id { get; set; }

        public string BSId { get; set; }

        public string UserName { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }
        public string StellarKey { get; set; }

        public IList<User> Contacts { get; set; }

    }
}
