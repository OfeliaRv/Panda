// import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addReview } from '../actions/ReviewAction'

const AddReview = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    // const handleEditorChange = (e) => {
    //     console.log('Content was updated:', e.target.getContent());
    // }

    return (
        <div className="add-component" id="add-review">
            <h4 className="add-component-heading">Add Review</h4>
            <form className="add-form" onSubmit={() => dispatch(addReview(data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="reviewer-name">Reviewer's Full Name</label>
                        <input type="text" id="reviewer-name" placeholder="Add Full Name" onChange={e => setData(prevState => ({ ...prevState, fullName: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="reviewer-company">Reviewer's company</label>
                        <input type="text" id="reviewer-company" placeholder="Add company" onChange={e => setData(prevState => ({ ...prevState, company: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="reviewer-position">Reviewer's position</label>
                        <input type="text" id="reviewer-position" placeholder="Add position" onChange={e => setData(prevState => ({ ...prevState, position: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="reviewer-image">Reviewer's photo</label>
                        <input type="file" id="reviewer-image" onChange={e => setData(prevState => ({ ...prevState, photo: e.target.files[0].name }))}  />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Review content</h5>
                    {/* <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>Type the review content</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                        }}
                        onChange={handleEditorChange}
                    /> */}
                </div>
                <textarea id="review-text" onChange={e => setData(prevState => ({ ...prevState, reviewText: e.target.value }))} placeholder="Enter text" required ></textarea>
                <button type="submit" className="add-button">Add review</button>
            </form>
        </div>
    );
}

export default AddReview;