import { Editor } from '@tinymce/tinymce-react'

const AddProduct = () => {
    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    return (
        <div className="add-component" id="add-news">
            <h4 className="add-component-heading">Add News</h4>
            <form className="add-form" action="">
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="product-name">Product name</label>
                        <input type="text" name="product-name" placeholder="Add news title" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-altname">Product alt name</label>
                        <input type="text" name="product-altname" placeholder="Add alt name" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-keywords">Product keywords</label>
                        <input type="text" name="product-keywords" placeholder="Add keywords" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-image">Add news image</label>
                        <input type="file" name="product-image" required />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Add product content</h5>
                    <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>Type the product content</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                        }}
                        onChange={handleEditorChange}
                    />
                </div>
                <button type="submit" className="add-button">Add product</button>
            </form>
        </div>
    );
}

export default AddProduct;