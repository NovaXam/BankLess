﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DAO
{
    public class Portion
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public User User { get; set; }
        public IList<Asset> Assets { get; set; }
    }
}
