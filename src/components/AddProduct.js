import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../actions/ProductAction'
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

const AddProduct = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const handleEditorChange = content => {
        setData(prevState => ({ ...prevState, productText: content }))
    }

    const submitHandler = e => {
        e.preventDefault();
        if (data.productText == '' || data.productText == null) {
            alert("Text field cannot be empty!");
        }
        else{
            dispatch(addProduct(data))
        }
    }

    return (
        <div className="add-component" id="add-product">
            <h4 className="add-component-heading">Add Product</h4>
            <form className="add-form" onSubmit={submitHandler}>
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
                <button type="submit" className="add-button">Add product</button>
            </form>
        </div>
    );
}

export default AddProduct;