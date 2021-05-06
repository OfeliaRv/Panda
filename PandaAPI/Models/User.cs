using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class User : IdentityUser
    {
        [Required]
        [MaxLength(100)]
        public string FullName { get; set; }
    }
}
