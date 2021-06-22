using Microsoft.EntityFrameworkCore;
using PandaAPI.Database;
using PandaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandaAPI.Data
{
    public class SqlForumData : IForumData
    {
        private readonly PandaDbContext _pandaContext;

        public SqlForumData(PandaDbContext pandaContext)
        {
            _pandaContext = pandaContext;
        }

        public async Task<ForumTopic> AddForumTopic(ForumTopic forum)
        {
            forum.Id = Guid.NewGuid();
            forum.NRead = 0;
            forum.Status = "Pending";
            forum.Date = DateTime.Now.ToString("dd/MM/yyyy HH:mm");
            _pandaContext.ForumTopics.Add(forum);
            await _pandaContext.SaveChangesAsync();
            return forum;
        }

        public async Task<ForumResponse> AddForumResponse(ForumResponse response, Guid forumId)
        {
            response.Id = Guid.NewGuid();
            response.TopicId = forumId;
            response.Status = "Pending";
            response.Date = DateTime.Now.ToString("dd/MM/yyyy HH:mm");
            _pandaContext.ForumResponses.Add(response);
            await _pandaContext.SaveChangesAsync();
            return response;
        }

        public void DeleteForumTopic(ForumTopic forum)
        {
            _pandaContext.ForumTopics.Remove(forum);
            _pandaContext.SaveChanges();
        }

        public ForumTopic GetForumTopic(Guid id)
        {
            var forum = _pandaContext.ForumTopics.Find(id);
            _pandaContext.Entry(forum).Collection(x => x.Responses).Load();
            return forum;
        }

        public List<ForumTopic> GetForumTopics()
        {
            var topics = _pandaContext.ForumTopics.Include(x => x.Responses).ToList();

            return topics;
        }

        public List<ForumTopic> GetApprovedForumTopics()
        {
            return _pandaContext.ForumTopics.Where(x => x.Status == "Approved").Include(x => x.Responses).ToList();
        }

        public List<ForumResponse> GetForumResponses(Guid id)
        {
            return _pandaContext.ForumResponses.Where(x => x.TopicId == id).Include(x => x.ForumTopic).ToList();
        }

        public void ChangeForumTopicStatus(Guid id, string status)
        {
            var topic = new ForumTopic() { Id = id, Status = status };
            _pandaContext.ForumTopics.Attach(topic);
            _pandaContext.Entry(topic).Property(x => x.Status).IsModified = true;
            _pandaContext.SaveChanges();
        }

        public void IncrementForumTopicViews(Guid id, int views)
        {
            var topic = new ForumTopic() { Id = id, NRead = views };
            _pandaContext.ForumTopics.Attach(topic);
            _pandaContext.Entry(topic).Property(x => x.NRead).IsModified = true;
            _pandaContext.SaveChanges();
        }
    }
}
