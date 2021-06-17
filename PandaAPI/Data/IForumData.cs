using PandaAPI.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PandaAPI.Data
{
    public interface IForumData
    {
        List<ForumTopic> GetForumTopics();

        ForumTopic GetForumTopic(Guid id);

        List<ForumResponse> GetForumResponses(Guid id);

        ForumTopic AddForumTopic(ForumTopic forum);

        Task<ForumResponse> AddForumResponse(ForumResponse response, Guid forumId);

        void DeleteForumTopic(ForumTopic forum);
    }
}
