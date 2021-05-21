using Microsoft.AspNetCore.Mvc;
using PandaAPI.Data;
using PandaAPI.Models;
using System;

namespace PandaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsData _newsData;
        public NewsController(INewsData newsData)
        {
            _newsData = newsData;
        }

        [HttpGet]
        public IActionResult GetNews()
        {
            return Ok(_newsData.GetNews());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetOneNews(Guid id)
        {
            var one_news = _newsData.GetOneNews(id);
            if (one_news != null)
            {
                return Ok(one_news);
            }

            return NotFound($"News with id: {id} was not found");
        }


        [HttpPost]
        public IActionResult AddNews(News one_news)
        {
            _newsData.AddNews(one_news);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + one_news.Id, one_news);
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteNews(Guid id)
        {
            var one_news = _newsData.GetOneNews(id);
            if (one_news != null)
            {
                _newsData.DeleteNews(one_news);
                return Ok();
            }

            return NotFound($"News with id: {id} was not found");
        }

        [HttpPatch]
        [Route("{id}")]
        public IActionResult EditNews(Guid id, News one_news)
        {
            var existing_one_news = _newsData.GetOneNews(id);
            if (existing_one_news != null)
            {
                one_news.Id = existing_one_news.Id;
                _newsData.EditNews(one_news);
            }

            return Ok(one_news);
        }
    }
}
