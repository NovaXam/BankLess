namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration3 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Portions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                        Phone = c.String(),
                        Email = c.String(),
                        BlockstackId = c.String(),
                        StellarAccount_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.StellarAccounts", t => t.StellarAccount_Id)
                .Index(t => t.StellarAccount_Id);
            
            CreateTable(
                "dbo.Transactions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Currency = c.String(),
                        Amount = c.Double(nullable: false),
                        Portion_Id = c.Int(),
                        Receiver_Id = c.Int(),
                        Sender_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Portions", t => t.Portion_Id)
                .ForeignKey("dbo.Users", t => t.Receiver_Id)
                .ForeignKey("dbo.Users", t => t.Sender_Id)
                .Index(t => t.Portion_Id)
                .Index(t => t.Receiver_Id)
                .Index(t => t.Sender_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Transactions", "Sender_Id", "dbo.Users");
            DropForeignKey("dbo.Transactions", "Receiver_Id", "dbo.Users");
            DropForeignKey("dbo.Transactions", "Portion_Id", "dbo.Portions");
            DropForeignKey("dbo.Portions", "User_Id", "dbo.Users");
            DropForeignKey("dbo.Users", "StellarAccount_Id", "dbo.StellarAccounts");
            DropIndex("dbo.Transactions", new[] { "Sender_Id" });
            DropIndex("dbo.Transactions", new[] { "Receiver_Id" });
            DropIndex("dbo.Transactions", new[] { "Portion_Id" });
            DropIndex("dbo.Users", new[] { "StellarAccount_Id" });
            DropIndex("dbo.Portions", new[] { "User_Id" });
            DropTable("dbo.Transactions");
            DropTable("dbo.Users");
            DropTable("dbo.Portions");
        }
    }
}
