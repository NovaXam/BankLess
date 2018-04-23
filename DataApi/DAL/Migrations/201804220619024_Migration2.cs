namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration2 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.StellarAccounts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Address = c.String(),
                        SecretKey = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            DropTable("dbo.Accounts");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Accounts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Address = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            DropTable("dbo.StellarAccounts");
        }
    }
}
