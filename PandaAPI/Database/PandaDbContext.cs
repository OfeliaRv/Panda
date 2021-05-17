using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PandaAPI.Models;

namespace PandaAPI.Database
{
    public class PandaDbContext : IdentityDbContext<User>
    {
        public PandaDbContext(DbContextOptions<PandaDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<News> News { get; set; }
    }
}
