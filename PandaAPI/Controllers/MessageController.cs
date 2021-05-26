using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PandaAPI.Data;
using PandaAPI.Models;
using System;

namespace PandaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageData _messageData;
        public MessageController(IMessageData messagesData)
        {
            _messageData = messagesData;
        }

        [HttpGet]
        public IActionResult GetMessages()
        {
            return Ok(_messageData.GetMessages());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetMessage(Guid id)
        {
            var message = _messageData.GetMessage(id);
            if (message != null)
            {
                return Ok(message);
            }

            return NotFound($"Message with id: {id} was not found");
        }


        [HttpPost]
        public IActionResult AddMessage(ClientMessage message)
        {
            _messageData.AddMessage(message);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + message.Id, message);
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteMessage(Guid id)
        {
            var message = _messageData.GetMessage(id);
            if (message != null)
            {
                _messageData.DeleteMessage(message);
                return Ok();
            }

            return NotFound($"Message with id: {id} was not found");
        }

        //[HttpPatch]
        //[Route("{id}")]
        //public IActionResult EditMessage(Guid id, ClientMessage message)
        //{
        //    var existing_message = _messageData.GetMessage(id);
        //    if (existing_message != null)
        //    {
        //        message.Id = existing_message.Id;
        //        _messageData.EditMessage(message);
        //    }

        //    return Ok(message);
        //}
    }
}
