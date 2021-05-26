using System;
using System.ComponentModel.DataAnnotations;


namespace PandaAPI.Models
{
    public class Review
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string Company { get; set; }

        [Required]
        public string Position { get; set; }
        [Required]
        public string ReviewText { get; set; }

        [Required]
        public string Photo { get; set; }
    }
}
