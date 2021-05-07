import { Editor } from '@tinymce/tinymce-react'

const AddNews = () => {
    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    return (
        <div className="add-component" id="add-news">
            <h4 className="add-component-heading">Add News</h4>
            <form className="add-form" action="">
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="news-title">News title</label>
                        <input type="text" name="news-title" placeholder="Add news title" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-date">News date</label>
                        <input type="date" name="news-date" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-altname">News alt name</label>
                        <input type="text" name="news-altname" placeholder="Add alt name" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-keywords">News keywords</label>
                        <input type="text" name="news-keywords" placeholder="Add keywords" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-image">Add news image</label>
                        <input type="file" name="news-image" required />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Add news content</h5>
                    <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>Type the news content</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
                        }
                        }
                        onChange={handleEditorChange}
                    />
                </div>
                <button type="submit" className="add-button">Add news</button>
            </form>
        </div>
    );
}

export default AddNews;