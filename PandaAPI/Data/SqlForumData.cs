using PandaAPI.Database;
using PandaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PandaAPI.Data
{
    public class SqlForumData : IForumData
    {
        private readonly PandaDbContext _pandaContext;

        public SqlForumData(PandaDbContext pandaContext)
        {
            _pandaContext = pandaContext;
        }

        public ForumItem AddForumItem(ForumItem forum)
        {
            forum.Id = Guid.NewGuid();
            forum.Rating = 0;
            forum.IsApproved = false;
            forum.Date = DateTime.Now;
            _pandaContext.ForumItems.Add(forum);
            _pandaContext.SaveChanges();
            return forum;
        }

        public ForumResponse AddResponse(ForumResponse response, ForumItem forum)
        {
            response.Id = Guid.NewGuid();
            response.TopicId = forum.Id;
            response.IsApproved = false;
            response.Date = DateTime.Now;
            _pandaContext.ForumResponses.Add(response);
            _pandaContext.SaveChanges();
            return response;
        }

        public void DeleteForumItem(ForumItem forum)
        {
            _pandaContext.ForumItems.Remove(forum);
            _pandaContext.SaveChanges();
        }

        public ForumItem GetForumItem(Guid id)
        {
            var forum = _pandaContext.ForumItems.Find(id);
            return forum;
        }

        public List<ForumItem> GetForumItems()
        {
            return _pandaContext.ForumItems.ToList();
        }
    }
}
