import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNews } from '../actions/NewsAction'
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

const AddNews = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const handleEditorChange = content => {
        setData(prevState => ({ ...prevState, newsText: content }))
    }

    const submitHandler = e => {
        e.preventDefault();
        if (data.newsText == '' || data.newsText == null) {
            alert("Text field cannot be empty!");
        }
        else{
            dispatch(addNews(data))
        }
    }

    return (
        <div className="add-component" id="add-news">
            <h4 className="add-component-heading">Add News</h4>
            <form className="add-form" onSubmit={submitHandler}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="news-title">News title</label>
                        <input type="text" id="news-title" placeholder="Add news title" onChange={e => setData(prevState => ({ ...prevState, title: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-date">News date</label>
                        <input type="date" id="news-date" onChange={e => setData(prevState => ({ ...prevState, date: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-altname">News alt name</label>
                        <input type="text" id="news-altName" placeholder="Add alt name" onChange={e => setData(prevState => ({ ...prevState, altName: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-keywords">News keywords</label>
                        <input type="text" id="news-keywords" placeholder="Add keywords" onChange={e => setData(prevState => ({ ...prevState, keywords: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-image">News image</label>
                        <input type="file" id="news-photo" onChange={e => setData(prevState => ({ ...prevState, photo: e.target.files[0].name }))} />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>News content</h5>
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
                <button type="submit" className="add-button">Add news</button>
            </form>
        </div>
    );
}

export default AddNews;