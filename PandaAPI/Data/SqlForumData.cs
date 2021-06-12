﻿using PandaAPI.Database;
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

        public ForumTopic AddForumTopic(ForumTopic forum)
        {
            forum.Id = Guid.NewGuid();
            forum.Rating = 0;
            forum.NRead = 0;
            forum.IsApproved = false;
            forum.Date = DateTime.Now;
            _pandaContext.ForumTopics.Add(forum);
            _pandaContext.SaveChanges();
            return forum;
        }

        public ForumResponse AddForumResponse(ForumResponse response, ForumTopic forum)
        {
            response.Id = Guid.NewGuid();
            response.TopicId = forum.Id;
            response.IsApproved = false;
            response.Date = DateTime.Now;
            _pandaContext.ForumResponses.Add(response);
            _pandaContext.SaveChanges();
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
            return forum;
        }

        public List<ForumTopic> GetForumTopics()
        {
            return _pandaContext.ForumTopics.ToList();
        }

        public List<ForumResponse> GetForumResponses(Guid id)
        {
            var forum = _pandaContext.ForumTopics.Find(id);
            return forum.Responses.ToList();
        }
    }
}
