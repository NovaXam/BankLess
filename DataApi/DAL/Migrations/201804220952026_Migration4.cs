namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration4 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Users", "StellarAccount_Id", "dbo.StellarAccounts");
            DropIndex("dbo.Users", new[] { "StellarAccount_Id" });
            RenameColumn(table: "dbo.Transactions", name: "Portion_Id", newName: "PortionId_Id");
            RenameIndex(table: "dbo.Transactions", name: "IX_Portion_Id", newName: "IX_PortionId_Id");
            CreateTable(
                "dbo.Assets",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Currency = c.String(),
                        Amount = c.Double(nullable: false),
                        Portion_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Portions", t => t.Portion_Id)
                .Index(t => t.Portion_Id);
            
            AddColumn("dbo.Portions", "Name", c => c.String());
            AddColumn("dbo.Users", "BSId", c => c.String());
            AddColumn("dbo.Users", "StellarKey", c => c.String());
            AddColumn("dbo.Users", "User_Id", c => c.Int());
            CreateIndex("dbo.Users", "User_Id");
            AddForeignKey("dbo.Users", "User_Id", "dbo.Users", "Id");
            DropColumn("dbo.Portions", "Title");
            DropColumn("dbo.Users", "BlockstackId");
            DropColumn("dbo.Users", "StellarAccount_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "StellarAccount_Id", c => c.Int());
            AddColumn("dbo.Users", "BlockstackId", c => c.String());
            AddColumn("dbo.Portions", "Title", c => c.String());
            DropForeignKey("dbo.Users", "User_Id", "dbo.Users");
            DropForeignKey("dbo.Assets", "Portion_Id", "dbo.Portions");
            DropIndex("dbo.Users", new[] { "User_Id" });
            DropIndex("dbo.Assets", new[] { "Portion_Id" });
            DropColumn("dbo.Users", "User_Id");
            DropColumn("dbo.Users", "StellarKey");
            DropColumn("dbo.Users", "BSId");
            DropColumn("dbo.Portions", "Name");
            DropTable("dbo.Assets");
            RenameIndex(table: "dbo.Transactions", name: "IX_PortionId_Id", newName: "IX_Portion_Id");
            RenameColumn(table: "dbo.Transactions", name: "PortionId_Id", newName: "Portion_Id");
            CreateIndex("dbo.Users", "StellarAccount_Id");
            AddForeignKey("dbo.Users", "StellarAccount_Id", "dbo.StellarAccounts", "Id");
        }
    }
}
