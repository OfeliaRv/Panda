using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class ForumTopic
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string TopicName { get; set; }

        [Required]
        public string AuthorFullName { get; set; }

        [Required]
        public string TopicText { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public int NRead { get; set; }

        [Required]
        public string Status { get; set; }

        public List<ForumResponse> Responses { get; set; }
    }
}
