using IdentityModel;
using IdentityServer4;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using PandaAPI.Data;
using PandaAPI.Database;
using PandaAPI.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;

namespace PandaAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            // Entity framwork
            services.AddDbContext<PandaDbContext>(options =>
             options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddScoped<INewsData, SqlNewsData>();
            services.AddScoped<IProductData, SqlProductData>();
            services.AddScoped<ICompanyData, SqlCompanyData>();
            services.AddScoped<IReviewData, SqlReviewData>();
            services.AddScoped<IMessageData, SqlMessageData>();
            services.AddScoped<IForumData, SqlForumData>();

            //For Identity
            services.AddIdentityCore<User>(x =>
            {
                x.Stores.MaxLengthForKeys = 128;
                x.Password.RequireLowercase = false;
                x.Password.RequireUppercase = false;
                x.Password.RequireNonAlphanumeric = false;
                x.Password.RequiredLength = 1;
                x.Password.RequireDigit = false;
            })
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<PandaDbContext>()
                .AddDefaultTokenProviders()
                .AddSignInManager();

            //Adding Authentication
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = IdentityConstants.ApplicationScheme;
                options.DefaultSignInScheme = IdentityConstants.ExternalScheme;
            })
                .AddIdentityServerJwt()
                .AddIdentityCookies();

            services.AddIdentityServer()
                .AddApiAuthorization<User, PandaDbContext>(o =>
                {
                    o.IdentityResources[IdentityServerConstants.StandardScopes.OpenId].UserClaims.Add(JwtClaimTypes.Role);
                    o.ApiResources.Single().UserClaims.Add(JwtClaimTypes.Role);
                });
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Remove(JwtClaimTypes.Role);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PandaAPI", Version = "v1" });
            });

            services.AddCors();

            services.AddControllersWithViews()
            .AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options =>
            {
                options.WithOrigins("https://localhost:3000", "https://localhost:3001")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PandaAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseIdentityServer();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
