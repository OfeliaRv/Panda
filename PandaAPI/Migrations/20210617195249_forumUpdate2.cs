using Microsoft.EntityFrameworkCore.Migrations;

namespace PandaAPI.Migrations
{
    public partial class forumUpdate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsApproved",
                table: "ForumTopics");

            migrationBuilder.DropColumn(
                name: "IsApproved",
                table: "ForumResponses");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "ForumTopics",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "ForumResponses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "ForumTopics");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "ForumResponses");

            migrationBuilder.AddColumn<bool>(
                name: "IsApproved",
                table: "ForumTopics",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsApproved",
                table: "ForumResponses",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
