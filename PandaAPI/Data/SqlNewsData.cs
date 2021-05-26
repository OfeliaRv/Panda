using PandaAPI.Database;
using PandaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PandaAPI.Data
{
    public class SqlNewsData : INewsData
    {
        private readonly PandaDbContext _pandaContext;

        public SqlNewsData(PandaDbContext pandaContext)
        {
            _pandaContext = pandaContext;
        }

        public News AddNews(News one_news)
        {
            one_news.Id = Guid.NewGuid();
            _pandaContext.News.Add(one_news);
            _pandaContext.SaveChanges();
            return one_news;
        }

        public void DeleteNews(News one_news)
        {
            _pandaContext.News.Remove(one_news);
            _pandaContext.SaveChanges();
        }

        public News EditNews(News one_news)
        {
            var existing_one_news = _pandaContext.News.Find(one_news.Id);
            if (existing_one_news != null)
            {
                existing_one_news.Title = one_news.Title;
                existing_one_news.Keywords = one_news.Keywords;
                existing_one_news.NewsText = one_news.NewsText;
                existing_one_news.Photo = one_news.Photo;
                existing_one_news.AltName = one_news.AltName;
                existing_one_news.Date = one_news.Date;
                _pandaContext.News.Update(existing_one_news);
                _pandaContext.SaveChanges();
            }

            return one_news;
        }

        public List<News> GetNews()
        {
            return _pandaContext.News.ToList();
        }

        public News GetOneNews(Guid id)
        {
            var one_news = _pandaContext.News.Find(id);
            return one_news;
        }
    }
}
