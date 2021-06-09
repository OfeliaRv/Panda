using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PandaAPI.Models
{
    public class ForumItem
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [ForeignKey("TopicName")]
        public string TopicName { get; set; }

        [Required]
        public string AuthorFullName { get; set; }

        [Required]
        public int Rating { get; set; }

        [Required]
        public string TopicText { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public int NRead { get; set; }

        [Required]
        public bool IsApproved { get; set; }

        public List<ForumResponse> Responses { get; set; }
    }
}
