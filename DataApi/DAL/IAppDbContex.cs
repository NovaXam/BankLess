using DAL.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace DAL
{
    public interface IAppDbContex
    {
        DbSet<StellarAccount> Accounts { get; set; }
        DbSet<Transaction> Transactions { get; set; }
        DbSet<User> Users { get; set; }
        DbSet<Portion> Portions { get; set; }
        DbSet<Asset> Assets { get; set; }        
        int SaveChanges();
    }
}
