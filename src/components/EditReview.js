import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editReview, fetchReview, deleteReview } from '../actions/ReviewAction'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

const EditReview = ({ fetchReview, reviewsData }) => {
    const { id } = useParams();
    const my_dispatch = useDispatch();
    const [data, setData] = useState({});

    useEffect(() => {
        fetchReview(id);
    }, [])

    useEffect(() => {
        setData(reviewsData.review);
    }, [reviewsData.review])

    const edit = e => {
        e.preventDefault();
        var inputs = document.getElementsByClassName('input-item');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }

        var textfield = document.getElementsByClassName('tox-tinymce');
        if (textfield.nodeType == 1) {
            textfield.setAttribute("aria-disabled", false);
            textfield.classList.remove('tox-tinymce--disabled');
        }
    }

    return (
        <div className="add-component" id="add-review">
            <div className="add-component-heading">
                <h4>Edit Review</h4>
                <div className="heading-buttons">
                    <div className="add-button" onClick={edit}>Edit Review</div>
                    <div className="add-button" style={{ backgroundColor: '#e55d5d' }} onClick={() => my_dispatch(deleteReview(id))}>Delete Review</div>
                </div>
            </div>
            <form className="add-form" onSubmit={() => my_dispatch(editReview(id, data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="reviewer-name">Reviewer name</label>
                        <input className="input-item" type="text" id="reviewer-name" defaultValue={reviewsData.review.fullName} onChange={e => setData(prevState => ({ ...prevState, fullName: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="reviewer-company">Reviewer company</label>
                        <input className="input-item" type="text" id="reviewer-company" defaultValue={reviewsData.review.company} onChange={e => setData(prevState => ({ ...prevState, company: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="review-y-pos">Reviewer position</label>
                        <input className="input-item" type="text" id="review-position" defaultValue={reviewsData.review.position} onChange={e => setData(prevState => ({ ...prevState, position: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="review-image">Reviewer photo</label>
                        {reviewsData.review.photo && <img id="edit-image" src={"../../img/" + reviewsData.review.photo} alt={reviewsData.review.fullName}></img>}
                        <input className="input-item" type="file" id="review-image" defaultValue={reviewsData.review.photo} onChange={e => setData(prevState => ({ ...prevState, photo: e.target.value }))} disabled />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Review content</h5>
                    {/* <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>current value</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',

                        }
                        }
                        disabled={true}
                    /> */}
                    <textarea className="input-item" id="review-text" defaultValue={reviewsData.review.reviewText} onChange={e => setData(prevState => ({ ...prevState, reviewText: e.target.value }))} placeholder="Enter text" disabled required ></textarea>
                </div>
                <button type="submit" className="add-button input-item" disabled>Update review</button>
            </form>
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
        fetchReview: (id) => dispatch(fetchReview(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditReview)