using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PandaAPI.Data;
using PandaAPI.Models;
using System;

namespace PandaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForumController : ControllerBase
    {
        private readonly IForumData _forumData;
        public ForumController(IForumData forumData)
        {
            _forumData = forumData;
        }

        [HttpGet]
        public IActionResult GetForumItems()
        {
            return Ok(_forumData.GetForumItems());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetForumItem(Guid id)
        {
            var forum = _forumData.GetForumItem(id);
            if (forum != null)
            {
                return Ok(forum);
            }

            return NotFound($"ForumItem with id: {id} was not found");
        }


        [HttpPost]
        public IActionResult AddForumItem(ForumItem forum)
        {
            _forumData.AddForumItem(forum);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + forum.Id, forum);
        }

        [HttpPost]
        [Route("Response/{id}")]
        public IActionResult AddResponse(Forum forumData)
        {
            var response = forumData.ForumResponse;
            var forum = forumData.ForumItem;
            _forumData.AddResponse(response, forum);
            return Ok(response);
            //return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + response.Id, response);
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteForumItem(Guid id)
        {
            var forum = _forumData.GetForumItem(id);
            if (forum != null)
            {
                _forumData.DeleteForumItem(forum);
                return Ok();
            }

            return NotFound($"ForumItem with id: {id} was not found");
        }

        //[HttpPatch]
        //[Route("{id}")]
        //public IActionResult EditForumItem(Guid id, ForumItem forum)
        //{
        //    var existing_forum = _forumData.GetForumItem(id);
        //    if (existing_forum != null)
        //    {
        //        forum.Id = existing_forum.Id;
        //        _forumData.EditForumItem(forum);
        //    }

        //    return Ok(forum);
        //}
    }
}
