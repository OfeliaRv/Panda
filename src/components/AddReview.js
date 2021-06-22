import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addReview } from '../actions/ReviewAction'
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

const AddReview = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const handleEditorChange = content => {
        setData(prevState => ({ ...prevState, reviewText: content }))
    }

    const submitHandler = e => {
        e.preventDefault();
        if (data.reviewText == '' || data.reviewText == null) {
            alert("Text field cannot be empty!");
        }
        else{
            dispatch(addReview(data))
        }
    }

    return (
        <div className="add-component" id="add-review">
            <h4 className="add-component-heading">Add Review</h4>
            <form className="add-form" onSubmit={submitHandler}>
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
                        <input type="file" id="reviewer-image" onChange={e => setData(prevState => ({ ...prevState, photo: e.target.files[0].name }))} required />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Review content</h5>
                    <Editor
                        initialValue="<p>Add text</p>"
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
                    />
                </div>
                <button type="submit" className="add-button">Add review</button>
            </form>
        </div>
    );
}

export default AddReview;