using Microsoft.EntityFrameworkCore.Migrations;

namespace PandaAPI.Migrations
{
    public partial class forumUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "ForumTopics");

            migrationBuilder.AddColumn<string>(
                name: "AuthorCompany",
                table: "ForumResponses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "AuthorPosition",
                table: "ForumResponses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AuthorCompany",
                table: "ForumResponses");

            migrationBuilder.DropColumn(
                name: "AuthorPosition",
                table: "ForumResponses");

            migrationBuilder.AddColumn<int>(
                name: "Rating",
                table: "ForumTopics",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
