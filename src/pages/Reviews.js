import { useEffect } from 'react'
import MainSection from '../components/MainSection'
import quotations from '../assets/img/quotations.svg'
import user_photo from '../assets/img/user-photo.png'
import { useSelector, useDispatch, connect } from 'react-redux'
import { fetchReviews } from '../actions/reviewAction'
import { loadReviews, showPage } from '../actions/showDataActions'

const Reviews = ({ fetchReviews, reviewsData }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchReviews();
        document.title = "Panda Navigation - Reviews";
        dispatch((showPage(0)));
    }, []);

    // get all reviews
    const reviews = reviewsData.reviews;

    // show maximum 3 reviews on a page
    const getReviewsRange = useSelector(state => state.showData.loadReviews);

    // show current page (little grey dot)
    const activePage = useSelector(state => state.showData.showPage);

    var dots = [];
    const dots_num = Math.ceil(reviews.length / 3);
    for (let i = 0; i < dots_num; i++) {
        dots[i] = {
            id: i
        };
    }

    const handleSlides = id => {
        dispatch(loadReviews(0 + 3 * id));
        dispatch(showPage(id));
    }

    return (
        <div id="reviews">
            <MainSection>
                <div className="reviews">
                    {reviewsData && reviewsData.reviews && reviewsData.reviews.slice(getReviewsRange.first, getReviewsRange.last).map(review =>
                        <div className="review" key={review.id}>
                            <div className="review-quote">
                                <div className="square-button white-button">
                                    <img src={quotations} alt="quote" />
                                </div>
                            </div>
                            <div className="review-content">
                                <div className="review-user-info">
                                    <div className="user-info-img">
                                        <img src={user_photo} alt="user" />
                                    </div>
                                    <div className="user-info-data">
                                        <h2>{review.fullName}</h2>
                                        <h6>{review.position} | {review.company}</h6>
                                    </div>
                                </div>
                                <div className="review-text">
                                    <p>{review.reviewText}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </MainSection>
            <div className="slider-buttons" style={{ padding: '0 10%', marginTop: '0' }}>
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === activePage ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        reviewsData: state.reviews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reviews)
