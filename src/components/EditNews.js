import { Editor } from '@tinymce/tinymce-react'

const EditNews = () => {
    return (
        <div className="add-component" id="add-news">
            <div className="add-component-heading">
                <h4>Edit News</h4>
                <div className="heading-buttons">
                    <div className="add-button">Edit News</div>
                    <div className="add-button" style={{backgroundColor: '#e55d5d'}}>Delete News</div>
                </div>
            </div>
            <form className="add-form" action="">
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="news-title">News title</label>
                        <input type="text" name="news-title" placeholder="current value" required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-date">News date</label>
                        <input type="date" name="news-date" required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-altname">News alt name</label>
                        <input type="text" name="news-altname" placeholder="current value" required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-keywords">News keywords</label>
                        <input type="text" name="news-keywords" placeholder="current value" required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="news-image">News image</label>
                        <input type="file" name="news-image" required disabled />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>News content</h5>
                    <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>current value</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',

                        }
                        }
                        disabled="true"
                    />
                </div>
                <button type="submit" className="add-button" disabled>Update news</button>
            </form>
        </div>
    );
}

export default EditNews;