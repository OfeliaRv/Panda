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

        Task<ForumTopic> AddForumTopic(ForumTopic forum);

        Task<ForumResponse> AddForumResponse(ForumResponse response, Guid forumId);

        void DeleteForumTopic(ForumTopic forum);

        List<ForumTopic> GetApprovedForumTopics();

        void ChangeForumTopicStatus(Guid id, string status);

        void IncrementForumTopicViews(Guid id, int views);
    }
}
