using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PandaAPI.Data;
using PandaAPI.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PandaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForumController : ControllerBase
    {
        private readonly IForumData _forumData;
        private readonly UserManager<User> _userManager;
        public ForumController(IForumData forumData, UserManager<User> userManager)
        {
            _forumData = forumData;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult GetForumTopics()
        {
            return Ok(_forumData.GetForumTopics());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetForumTopic(Guid id)
        {
            var forum = _forumData.GetForumTopic(id);
            if (forum != null)
            {
                return Ok(forum);
            }

            return NotFound($"Topic with id: {id} was not found");
        }

        [HttpGet]
        [Route("{id}/Responses")]
        public IActionResult GetForumResponses(Guid id)
        {
            var forum = _forumData.GetForumTopic(id);
            if (forum != null)
            {
                return Ok(forum.Responses);
            }

            return NotFound($"Responses for Topic with id: {id} were not found");
        }


        [HttpPost]
        public IActionResult AddForumTopic(ForumTopic forum)
        {
            _forumData.AddForumTopic(forum);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + forum.Id, forum);
        }

        [HttpPost]
        [Route("{id}/Response")]
        public async Task<IActionResult> AddForumResponse(Guid id, ForumResponseModel forumResponse)
        {
            var user = await _userManager.GetUserAsync(User);
            var response = new ForumResponse
            {
                ReplyText = forumResponse.ReplyText,
                AuthorFullName = user.FullName
            };

            await _forumData.AddForumResponse(response, id);

            return Ok(response);
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteForumTopic(Guid id)
        {
            var forum = _forumData.GetForumTopic(id);
            if (forum != null)
            {
                _forumData.DeleteForumTopic(forum);
                return Ok();
            }

            return NotFound($"Topic with id: {id} was not found");
        }

        //[HttpPatch]
        //[Route("{id}")]
        //public IActionResult EditForumTopic(Guid id, ForumTopic forum)
        //{
        //    var existing_forum = _forumData.GetForumTopic(id);
        //    if (existing_forum != null)
        //    {
        //        forum.Id = existing_forum.Id;
        //        _forumData.EditForumTopic(forum);
        //    }

        //    return Ok(forum);
        //}
    }
}
