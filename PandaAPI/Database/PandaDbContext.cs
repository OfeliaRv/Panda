using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PandaAPI.Models;

namespace PandaAPI.Database
{
    public class PandaDbContext : KeyApiAuthorizationDbContext<User, IdentityRole, IdentityUserRole<string>, string>
    {
        public PandaDbContext(DbContextOptions<PandaDbContext> options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>(x => x.ToTable("User"));
            builder.Entity<IdentityRole>(x => x.ToTable("Role"));
            builder.Entity<IdentityUserRole<string>>(x => x.ToTable("UserRole"));
            builder.Entity<IdentityUserClaim<string>>(x => x.ToTable("UserClaim"));
            builder.Entity<IdentityUserLogin<string>>(x => x.ToTable("UserLogin"));
            builder.Entity<IdentityRoleClaim<string>>(x => x.ToTable("RoleClaim"));
            builder.Entity<IdentityUserToken<string>>(x => x.ToTable("UserToken"));

            //libo vot tak
            builder.Entity<ForumResponse>().HasOne(x => x.ForumTopic).WithMany(x => x.Responses).HasForeignKey(x => x.TopicId);
        }

        public DbSet<News> News { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<ClientMessage> Messages { get; set; }
        public DbSet<ForumTopic> ForumTopics { get; set; }
        public DbSet<ForumResponse> ForumResponses { get; set; }
    }
}
