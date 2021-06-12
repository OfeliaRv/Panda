using PandaAPI.Models;
using System;
using System.Collections.Generic;

namespace PandaAPI.Data
{
    public interface IForumData
    {
        List<ForumTopic> GetForumTopics();

        ForumTopic GetForumTopic(Guid id);

        List<ForumResponse> GetForumResponses(Guid id);

        ForumTopic AddForumTopic(ForumTopic forum);

        ForumResponse AddForumResponse(ForumResponse response, ForumTopic forum);

        void DeleteForumTopic(ForumTopic forum);
    }
}
