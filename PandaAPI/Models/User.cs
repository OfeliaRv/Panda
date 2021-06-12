using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class User : IdentityUser
    {
        [Required]
        [MaxLength(100)]
        public string FullName { get; set; }
        public string Company { get; set; }
        public string Position { get; set; }
        public int? UserInfoId { get; set; }
        public UserInfo UserInfo { get; set; }
    }

    public class UserInfo
    {
        public int Id { get; set; }
        public string Details { get; set; }
    }
}
