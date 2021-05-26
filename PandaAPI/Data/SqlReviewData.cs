using PandaAPI.Database;
using PandaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PandaAPI.Data
{
    public class SqlReviewData : IReviewData
    {
        private readonly PandaDbContext _pandaContext;

        public SqlReviewData(PandaDbContext pandaContext)
        {
            _pandaContext = pandaContext;
        }

        public Review AddReview(Review review)
        {
            review.Id = Guid.NewGuid();
            _pandaContext.Reviews.Add(review);
            _pandaContext.SaveChanges();
            return review;
        }

        public void DeleteReview(Review review)
        {
            _pandaContext.Reviews.Remove(review);
            _pandaContext.SaveChanges();
        }

        public Review EditReview(Review review)
        {
            var existing_review = _pandaContext.Reviews.Find(review.Id);
            if (existing_review != null)
            {
                existing_review.FullName = review.FullName;
                existing_review.Company = review.Company;
                existing_review.Photo = review.Photo;
                existing_review.Position = review.Position;
                existing_review.ReviewText = review.ReviewText;
                _pandaContext.Reviews.Update(existing_review);
                _pandaContext.SaveChanges();
            }

            return review;
        }

        public Review GetReview(Guid id)
        {
            var review = _pandaContext.Reviews.Find(id);
            return review;
        }

        public List<Review> GetReviews()
        {
            return _pandaContext.Reviews.ToList();
        }
    }
}
