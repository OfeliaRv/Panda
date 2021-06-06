import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCompany } from '../actions/CompanyAction'
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

const AddCompany = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const handleEditorChange = content => {
        setData(prevState => ({ ...prevState, about: content }))
    }

    const submitHandler = e => {
        e.preventDefault();
        if (data.about == '' || data.about == null) {
            alert("Text field cannot be empty!");
        }
        else{
            dispatch(addCompany(data))
        }
    }

    return (
        <div className="add-component" id="add-company">
            <h4 className="add-component-heading">Add company</h4>
            <form className="add-form" onSubmit={submitHandler}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="company-name">Company name</label>
                        <input type="text" id="company-name" placeholder="Add company name" onChange={e => setData(prevState => ({ ...prevState, name: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-x-pos">Company X-position</label>
                        <input type="text" id="company-x-pos" placeholder="Add X-position" onChange={e => setData(prevState => ({ ...prevState, x_position: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-y-pos">Company Y-position</label>
                        <input type="text" id="company-y-pos" placeholder="Add Y-position" onChange={e => setData(prevState => ({ ...prevState, y_position: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-image">Add company image</label>
                        <input type="file" id="company-image" onChange={e => setData(prevState => ({ ...prevState, logo: e.target.files[0].name }))} required />
                    </div>
                    <h5>Company information</h5>
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
                <button type="submit" className="add-button">Add company</button>
            </form>
        </div>
    );
}

export default AddCompany;