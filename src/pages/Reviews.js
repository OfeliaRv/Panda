import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import edit from '../assets/img/edit.svg'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/ReviewAction'

const Reviews = ({ fetchReviews, reviewsData }) => {
    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div className="dashboard" id="reviews">
            <div className="dashboard-header">
                <h1>PANDA Reviews list</h1>
                <Link to="/addreview">
                    <div className="add-button">
                        <p>Add review</p>
                    </div>
                </Link>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full name</th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Review text</th>
                        <th>Reviewer photo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {reviewsData.loading ? (
                    <h2>Loading</h2>
                ) : reviewsData.error ? (
                    <h2>{reviewsData.error}</h2>
                ) : reviewsData.reviews.length === 0 ? (
                    <h2>No data to display</h2>
                ) : (
                    <tbody>
                        {reviewsData && reviewsData.reviews && reviewsData.reviews.map(review =>
                            <tr key={review.id}>
                                <td>{reviewsData.reviews.indexOf(review) + 1}</td>
                                <td>{review.fullName}</td>
                                <td>{review.company}</td>
                                <td>{review.position}</td>
                                <td>{review.reviewText}</td>
                                <td>{review.photo}</td>
                                <td className="actions">
                                    <Link to={"/editreview/" + review.id}><img src={edit} alt="edit" title="Edit" /> </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                )}
            </Table>
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