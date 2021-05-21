using System;
using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class Product
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(300)]
        public string Name { get; set; }

        [Required]
        public string AltName { get; set; }

        [Required]
        public string Keywords { get; set; }

        [Required]
        public string ProductText { get; set; }

        [Required]
        public string Photo { get; set; }
    }
}
