using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PandaAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly RoleManager<IdentityRole> roleManager;

        public AuthenticationController(UserManager<User> userManager, SignInManager<User> signInManager, RoleManager<IdentityRole> roleManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.roleManager = roleManager;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var UserExists = await userManager.FindByNameAsync(model.UserName);
            if (UserExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists" });
            User user = new()
            {
                Email = model.Email,
                FullName = model.FullName,
                UserName = model.UserName
            };

            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Failed to register new user" });

            return Ok(new Response { Status = "Success", Message = "User was successfully created!" });
        }

        [HttpPost("RegisterAdmin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExist = await userManager.FindByNameAsync(model.UserName);
            if (userExist != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = " User Already Exist" });

            User user = new()
            {
                Email = model.Email,
                FullName = model.FullName,
                UserName = model.UserName
            };

            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = $"{result.Errors.ToList()[0].Code}", Message = $"{result.Errors.ToList()[0].Description}" });

            await signInManager.SignInAsync(user, true);

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));

            if (!await roleManager.RoleExistsAsync(UserRoles.User))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.User));

            if (await roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await userManager.AddToRolesAsync(user, new List<string>() { UserRoles.Admin });
            }

            return Ok(new Response { Status = "Success", Message = "User Created Successfully" });
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var result = await signInManager.PasswordSignInAsync(model.UserName, model.Password, true, false);

            if (result.Succeeded)
            {
                return Ok();
            }

            return Unauthorized();
        }
    }
}
