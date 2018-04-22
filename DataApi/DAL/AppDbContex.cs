using DAL.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace DAL.Repo
{
    public class AppDbContex : DbContext, IAppDbContex
    {
        static string connection = "name=TestConnection";

        public AppDbContex() : base(connection)
        { }

        public AppDbContex(string connectionString) : base(connectionString)
        { }

        public DbSet<StellarAccount> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Portion> Portions { get; set; }
        public DbSet<Asset> Assets { get; set; }
    }
}
