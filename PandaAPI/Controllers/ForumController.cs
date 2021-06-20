using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PandaAPI.Data;
using PandaAPI.Models;
using System;
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
        [Route("All")]
        public IActionResult GetForumTopics()
        {
            return Ok(_forumData.GetForumTopics());
        }

        [HttpGet]
        public IActionResult GetApprovedForumTopics()
        {
            return Ok(_forumData.GetApprovedForumTopics());
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
            var responses = _forumData.GetForumResponses(id);
            if (responses.Count > 0)
            {
                return Ok(responses);
            }

            return NotFound($"Responses for Topic with id: {id} were not found");
        }


        [HttpPost]
        public async Task<IActionResult> AddForumTopic(ForumTopicModel forumTopic)
        {
            var user = await _userManager.GetUserAsync(User);
            var forum = new ForumTopic
            {
                TopicName = forumTopic.TopicName,
                TopicText = forumTopic.TopicText,
                AuthorFullName = user.FullName
            };

            await _forumData.AddForumTopic(forum);
            return Ok(forum);
        }

        [HttpPost]
        [Route("{id}/Response")]
        public async Task<IActionResult> AddForumResponse(Guid id, ForumResponseModel forumResponse)
        {
            var user = await _userManager.GetUserAsync(User);
            var response = new ForumResponse
            {
                ReplyText = forumResponse.ReplyText,
                AuthorFullName = user.FullName,
                AuthorPosition = user.Position,
                AuthorCompany = user.Company
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

        [HttpPatch]
        [Route("{id}/Status")]
        public IActionResult ChangeForumTopicStatus(Guid id, [FromBody] string status)
        {
            _forumData.ChangeForumTopicStatus(id, status);
            return Ok();
        }

        [HttpPatch]
        [Route("{id}/Views")]
        public IActionResult IncrementForumTopicViews(Guid id, [FromBody] int views)
        {
            _forumData.IncrementForumTopicViews(id, views);
            return Ok();
        }
    }
}
