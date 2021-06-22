import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editReview, fetchReview, deleteReview } from '../actions/ReviewAction'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import 'tinymce/tinymce'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/table'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
import 'tinymce/skins/content/default/content.min.css'
import { Editor } from '@tinymce/tinymce-react'

const EditReview = ({ fetchReview, reviewsData }) => {
    const { id } = useParams();
    const my_dispatch = useDispatch();
    const [data, setData] = useState({});
    const [isEditorEnabled, setIsEditorEnabled] = useState(true);

    useEffect(() => {
        fetchReview(id);
        var inputs = document.getElementsByClassName('input-item');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
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
        setIsEditorEnabled(false);
    }

    const handleEditorChange = content => {
        setData(prevState => ({ ...prevState, reviewText: content }))
    }

    return (
        <div className="add-component" id="add-review">
            <div className="add-component-heading">
                <h4>Edit Review</h4>
                <div className="heading-buttons">
                    <div className="add-button" onClick={edit}>Edit</div>
                    <div className="add-button" style={{ backgroundColor: '#e55d5d' }} onClick={() => my_dispatch(deleteReview(id))}>Delete</div>
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
                    <Editor
                        initialValue={reviewsData.review.reviewText}
                        init={{
                            skin: false,
                            content_css: false,
                            height: 300,
                            menubar: false,
                            plugins: [
                                'link image',
                                'table paste'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleEditorChange}
                        disabled={isEditorEnabled}
                        required={true}
                    />
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