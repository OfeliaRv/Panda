using System;
using System.ComponentModel.DataAnnotations;

namespace PandaAPI.Models
{
    public class News
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(300)]
        public string Title { get; set; }

        [Required]
        public string AltName { get; set; }

        [Required]
        public string Keywords { get; set; }

        [Required]
        public string NewsText { get; set; }

        [Required]
        public string Date { get; set; }

        [Required]
        public string Photo { get; set; }

        internal void Add(News news)
        {
            throw new NotImplementedException();
        }
    }
}
