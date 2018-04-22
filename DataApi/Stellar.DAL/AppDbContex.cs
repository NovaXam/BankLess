using Stellar.DAL.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace Stellar.DAL.Repo
{
    public class AppDbContex : DbContext, IAppDbContex
    {
        public AppDbContex() { }

        public AppDbContex(string connectionString) : base(connectionString)
        { }
        
        public DbSet<Account> Accounts { get; set; }


    }
}
