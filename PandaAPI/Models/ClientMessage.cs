using System;
using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class ClientMessage
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string MessageText { get; set; }

        public DateTime Date { get; set; }
    }
}
