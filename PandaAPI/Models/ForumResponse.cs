using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PandaAPI.Models
{
    public class ForumResponse
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [ForeignKey("TopicId")]
        public Guid TopicId { get; set; }

        [Required]
        public string AuthorFullName { get; set; }

        [Required]
        public string ReplyText { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public bool IsApproved { get; set; }

        public ForumItem ForumItem { get; set; }
    }
}
