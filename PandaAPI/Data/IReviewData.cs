using PandaAPI.Models;
using System;
using System.Collections.Generic;

namespace PandaAPI.Data
{
    public interface IReviewData
    {
        List<Review> GetReviews();

        Review GetReview(Guid id);

        Review AddReview(Review review);

        void DeleteReview(Review review);

        Review EditReview(Review review);
    }
}
