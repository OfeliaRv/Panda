using PandaAPI.Models;
using System;
using System.Collections.Generic;

namespace PandaAPI.Data
{
    public interface INewsData
    {
        List<News> GetNews();

        News GetOneNews(Guid id);

        News AddNews(News one_news);

        void DeleteNews(News one_news);

        News EditNews(News one_news);
    }
}
