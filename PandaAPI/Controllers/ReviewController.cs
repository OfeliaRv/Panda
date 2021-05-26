using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PandaAPI.Data;
using PandaAPI.Models;
using System;

namespace PandaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewData _reviewData;
        public ReviewController(IReviewData reviewsData)
        {
            _reviewData = reviewsData;
        }

        [HttpGet]
        public IActionResult GetReviews()
        {
            return Ok(_reviewData.GetReviews());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetReview(Guid id)
        {
            var review = _reviewData.GetReview(id);
            if (review != null)
            {
                return Ok(review);
            }

            return NotFound($"Review with id: {id} was not found");
        }


        [HttpPost]
        public IActionResult AddReview(Review review)
        {
            _reviewData.AddReview(review);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + review.Id, review);
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteReview(Guid id)
        {
            var review = _reviewData.GetReview(id);
            if (review != null)
            {
                _reviewData.DeleteReview(review);
                return Ok();
            }

            return NotFound($"Review with id: {id} was not found");
        }

        [HttpPatch]
        [Route("{id}")]
        public IActionResult EditReview(Guid id, Review review)
        {
            var existing_review = _reviewData.GetReview(id);
            if (existing_review != null)
            {
                review.Id = existing_review.Id;
                _reviewData.EditReview(review);
            }

            return Ok(review);
        }
    }
}
