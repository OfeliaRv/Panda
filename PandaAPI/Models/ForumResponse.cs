using System;
using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class ForumResponse
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid? TopicId { get; set; }

        [Required]
        public string AuthorFullName { get; set; }

        [Required]
        public string ReplyText { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public bool IsApproved { get; set; }

        public ForumTopic ForumTopic { get; set; }
    }
}
