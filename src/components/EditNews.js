// import { Editor } from '@tinymce/tinymce-react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editNews, fetchOneNews, deleteNews } from '../actions/NewsAction'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

const EditNews = ({ fetchOneNews, newsData }) => {
    const { id } = useParams();
    const my_dispatch = useDispatch();
    // const [data, setData] = useState({});
    // const [data, setData] = useState({ 
    //     title: newsData.one_news.title,
    //     date: newsData.one_news.date,
    //     altName: newsData.one_news.altName,
    //     keywords: newsData.one_news.keywords,
    //     photo: newsData.one_news.photo,
    //     newsText: newsData.one_news.newsText
    // });

    const [data, setData] = useState({ 
        title: "",
        date: "",
        altName: "",
        keywords: "",
        photo: "",
        newsText: ""
    });

    useEffect(() => {
        fetchOneNews(id);
        // setData(prevState => ({
        //     ...prevState,
        //     title: newsData.one_news.title,
        //     date: newsData.one_news.date,
        //     altName: newsData.one_news.altName,
        //     keywords: newsData.one_news.keywords,
        //     photo: newsData.one_news.photo,
        //     newsText: newsData.one_news.newsText
        // }));
        console.log("current news", newsData.one_news);
        // console.log("data: ", data);
    }, [])

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
        <div className="add-component" id="add-news">
            <div className="add-component-heading">
                <h4>Edit News</h4>
                <div className="heading-buttons">
                    <div className="add-button" onClick={edit}>Edit News</div>
                    <div className="add-button" style={{ backgroundColor: '#e55d5d' }} onClick={() => my_dispatch(deleteNews(id))}>Delete News</div>
                </div>
            </div>
            <form className="add-form" onSubmit={() => my_dispatch(editNews(id, data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="news-title">News title</label>
                        <input className="input-item" type="text" id="news-title" defaultValue={newsData.one_news.title} onChange={e => setData(prevState => ({ ...prevState, title: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-date">News date</label>
                        <input className="input-item" type="date" id="news-date" defaultValue={newsData.one_news.date} onChange={e => setData(prevState => ({ ...prevState, date: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-altname">News alt name</label>
                        <input className="input-item" type="text" id="news-altname" defaultValue={newsData.one_news.altName} onChange={e => setData(prevState => ({ ...prevState, altName: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-keywords">News keywords</label>
                        <input className="input-item" type="text" id="news-keywords" defaultValue={newsData.one_news.keywords} onChange={e => setData(prevState => ({ ...prevState, keywords: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-image">News image</label>
                        {newsData.one_news.photo && <img src={"./img/" + newsData.one_news.photo} alt={newsData.one_news.title}></img>}
                        <input className="input-item" type="file" id="news-image" defaultValue={newsData.one_news.photo} onChange={e => setData(prevState => ({ ...prevState, photo: e.target.value }))} required disabled />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>News content</h5>
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
                    <textarea id="news-text" defaultValue={newsData.one_news.newsText} onChange={e => setData(prevState => ({ ...prevState, newsText: e.target.value }))} placeholder="Enter text" required ></textarea>
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
        fetchOneNews: (id) => dispatch(fetchOneNews(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditNews)


// export default EditNews;