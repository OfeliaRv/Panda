using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class AdminRegisterModel
    {
        [Required (ErrorMessage = "Username is required")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Fullname is required")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
