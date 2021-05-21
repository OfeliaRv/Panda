using System;
using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class Company
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(300)]
        public string Name { get; set; }

        [Required]
        public string X_position { get; set; }

        [Required]
        public string Y_position { get; set; }
        [Required]
        public string About { get; set; }

        [Required]
        public string Logo{ get; set; }
    }
}
