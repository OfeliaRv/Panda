using PandaAPI.Models;
using System;
using System.Collections.Generic;

namespace PandaAPI.Data
{
    public interface IForumData
    {
        List<ForumItem> GetForumItems();

        ForumItem GetForumItem(Guid id);

        ForumItem AddForumItem(ForumItem forum);

        void DeleteForumItem(ForumItem forum);

        ForumResponse AddResponse(ForumResponse response, ForumItem forum);

        //ForumItem EditForum(ForumItem forum);
    }
}
