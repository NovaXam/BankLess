namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration5 : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Transactions", name: "PortionId_Id", newName: "Portion_Id");
            RenameIndex(table: "dbo.Transactions", name: "IX_PortionId_Id", newName: "IX_Portion_Id");
            AddColumn("dbo.Transactions", "Type", c => c.String());
            AddColumn("dbo.Transactions", "Balance", c => c.Double(nullable: false));
            AddColumn("dbo.Transactions", "Date", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Transactions", "Date");
            DropColumn("dbo.Transactions", "Balance");
            DropColumn("dbo.Transactions", "Type");
            RenameIndex(table: "dbo.Transactions", name: "IX_Portion_Id", newName: "IX_PortionId_Id");
            RenameColumn(table: "dbo.Transactions", name: "Portion_Id", newName: "PortionId_Id");
        }
    }
}
