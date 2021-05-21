// import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNews } from '../actions/NewsAction';

const AddNews = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    return (
        <div className="add-component" id="add-news">
            <h4 className="add-component-heading">Add News</h4>
            <form className="add-form" onSubmit={() => dispatch(addNews(data))}>
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
                    {/* <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>Type the news content</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
                        }
                        }
                        onChange={e => setData(prevState => ({ ...prevState, newsText: e.target.getContent() }))}
                    /> */}
                    <textarea id="news-text" onChange={e => setData(prevState => ({ ...prevState, newsText: e.target.value }))} placeholder="Enter text" required ></textarea>
                </div>
                <button type="submit" className="add-button">Add news</button>
            </form>
        </div>
    );
}

export default AddNews;