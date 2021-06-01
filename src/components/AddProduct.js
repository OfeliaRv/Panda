import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../actions/ProductAction'

const AddProduct = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    return (
        <div className="add-component" id="add-product">
            <h4 className="add-component-heading">Add Product</h4>
            <form className="add-form" onSubmit={() => dispatch(addProduct(data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="product-name">Product name</label>
                        <input type="text" id="product-name" placeholder="Add product name" onChange={e => setData(prevState => ({ ...prevState, name: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-altname">Product alt name</label>
                        <input type="text" id="product-altname" placeholder="Add alt name" onChange={e => setData(prevState => ({ ...prevState, altName: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-keywords">Product keywords</label>
                        <input type="text" id="product-keywords" placeholder="Add keywords" onChange={e => setData(prevState => ({ ...prevState, keywords: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-image">Product image</label>
                        <input type="file" id="product-image" onChange={e => setData(prevState => ({ ...prevState, photo: e.target.files[0].name }))} required />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Product content</h5>
                    {/* <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>Type the product content</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                        }}
                        onChange={handleEditorChange}
                    /> */}
                </div>
                <textarea id="product-text" onChange={e => setData(prevState => ({ ...prevState, productText: e.target.value }))} placeholder="Enter text" required ></textarea>
                <button type="submit" className="add-button">Add product</button>
            </form>
        </div>
    );
}

export default AddProduct;