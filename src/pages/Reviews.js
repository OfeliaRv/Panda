import { DataContext } from '../DataContext'
import { useContext } from 'react'
import MainSection from '../components/MainSection'
import quotations from '../assets/img/quotations.svg'
import user_photo from '../assets/img/user-photo.png'

const Reviews = () => {
    const { reviewData } = useContext(DataContext);
    const [reviews] = reviewData;

    return (
        <div id="reviews">
            <MainSection>
                <div className="reviews">
                    {reviews.map(review =>
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
                                        <h2>{review.username}</h2>
                                        <h6>Lorem ipsum dolor sit</h6>
                                    </div>
                                </div>
                                <div className="review-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </MainSection>
        </div>
    );
}

export default Reviews;