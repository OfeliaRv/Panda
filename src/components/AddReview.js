import { Editor } from '@tinymce/tinymce-react'

const AddReview = () => {
    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    return (
        <div className="add-component" id="add-review">
            <h4 className="add-component-heading">Add Review</h4>
            <form className="add-form" action="">
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="review-name">Reviewer's Full Name</label>
                        <input type="text" name="review-name" placeholder="Add Full Name" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="review-company">Reviewer's company</label>
                        <input type="text" name="review-company" placeholder="Add position" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="review-position">Reviewer's position</label>
                        <input type="text" name="review-position" placeholder="Add position" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="review-image">Reviewer's photo</label>
                        <input type="file" name="review-image" />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Review content</h5>
                    <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>Type the review content</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                        }}
                        onChange={handleEditorChange}
                    />
                </div>
                <button type="submit" className="add-button">Add review</button>
            </form>
        </div>
    );
}

export default AddReview;