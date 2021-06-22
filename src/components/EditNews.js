import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editNews, fetchOneNews, deleteNews } from '../actions/NewsAction'
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

const EditNews = ({ fetchOneNews, newsData }) => {
    const my_dispatch = useDispatch();

    // get news id
    const { id } = useParams();

    // data to be sent to the API
    const [data, setData] = useState({});

    const [isEditorEnabled, setIsEditorEnabled] = useState(true);

    useEffect(() => {
        fetchOneNews(id);
        var inputs = document.getElementsByClassName('input-item');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
    }, [])

    // set fields to the current news data
    useEffect(() => {
        setData(newsData.one_news);
    }, [newsData.one_news])

    const edit = e => {
        e.preventDefault();
        var inputs = document.getElementsByClassName('input-item');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        setIsEditorEnabled(false);
    }

    const handleEditorChange = content => {
        setData(prevState => ({ ...prevState, newsText: content }))
    }

    return (
        <div className="add-component" id="add-news">
            <div className="add-component-heading">
                <h4>Edit News</h4>
                <div className="heading-buttons">
                    <div className="add-button" onClick={edit}>Edit</div>
                    <div className="add-button" style={{ backgroundColor: '#e55d5d' }} onClick={() => my_dispatch(deleteNews(id))}>Delete</div>
                </div>
            </div>
            <form className="add-form" onSubmit={() => my_dispatch(editNews(id, data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="news-title">News title</label>
                        <input className="input-item" type="text" id="news-title" defaultValue={newsData.one_news.title} onChange={e => setData(prevState => ({ ...prevState, title: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-date">News date</label>
                        <input className="input-item" type="date" id="news-date" defaultValue={newsData.one_news.date} onChange={e => setData(prevState => ({ ...prevState, date: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-altname">News alt name</label>
                        <input className="input-item" type="text" id="news-altname" defaultValue={newsData.one_news.altName} onChange={e => setData(prevState => ({ ...prevState, altName: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-keywords">News keywords</label>
                        <input className="input-item" type="text" id="news-keywords" defaultValue={newsData.one_news.keywords} onChange={e => setData(prevState => ({ ...prevState, keywords: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-image">News image</label>
                        {newsData.one_news.photo && <img id="edit-image" src={"../../img/" + newsData.one_news.photo} alt={newsData.one_news.title}></img>}
                        <input className="input-item" type="file" id="news-image" defaultValue={newsData.one_news.photo} onChange={e => setData(prevState => ({ ...prevState, photo: e.target.value }))} />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>News content</h5>
                    <Editor
                        initialValue={newsData.one_news.newsText}
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
                <button type="submit" className="add-button input-item" disabled>Update news</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        newsData: state.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOneNews: id => dispatch(fetchOneNews(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditNews)