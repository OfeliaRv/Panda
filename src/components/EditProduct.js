import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editProduct, fetchProduct, deleteProduct } from '../actions/ProductAction'
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

const EditProduct = ({ fetchProduct, productsData }) => {
    const { id } = useParams();
    const my_dispatch = useDispatch();
    const [data, setData] = useState({});
    const [isEditorEnabled, setIsEditorEnabled] = useState(true);

    useEffect(() => {
        fetchProduct(id);
        var inputs = document.getElementsByClassName('input-item');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
    }, [])

    useEffect(() => {
        setData(productsData.product);
    }, [productsData.product])

    const edit = e => {
        e.preventDefault();
        console.log("click");
        var inputs = document.getElementsByClassName('input-item');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        setIsEditorEnabled(false);
    }

    const handleEditorChange = content => {
        setData(prevState => ({ ...prevState, productText: content }))
    }

    return (
        <div className="add-component" id="add-product">
            <div className="add-component-heading">
                <h4>Edit Product</h4>
                <div className="heading-buttons">
                    <div className="add-button" onClick={edit}>Edit</div>
                    <div className="add-button" style={{ backgroundColor: '#e55d5d' }} onClick={() => my_dispatch(deleteProduct(id))}>Delete</div>
                </div>
            </div>
            <form className="add-form" onSubmit={() => my_dispatch(editProduct(id, data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="product-name">Product name</label>
                        <input type="text" className="input-item" id="product-name" placeholder="Add product name" defaultValue={productsData.product.name} onChange={e => setData(prevState => ({ ...prevState, name: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-altname">Product alt name</label>
                        <input type="text" className="input-item" id="product-altname" placeholder="Add alt name" defaultValue={productsData.product.altName} onChange={e => setData(prevState => ({ ...prevState, altName: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-keywords">Product keywords</label>
                        <input type="text" className="input-item" id="product-keywords" placeholder="Add keywords" defaultValue={productsData.product.keywords} onChange={e => setData(prevState => ({ ...prevState, keywords: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-image">Producter photo</label>
                        {productsData.product.photo && <img id="edit-image" src={"../../img/" + productsData.product.photo} alt={productsData.product.fullName}></img>}
                        <input className="input-item" type="file" id="product-image" defaultValue={productsData.product.photo} onChange={e => setData(prevState => ({ ...prevState, photo: e.target.value }))} />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Product content</h5>
                    <Editor
                        initialValue={productsData.product.productText}
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
                <button type="submit" className="add-button input-item" disabled>Update product</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        productsData: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProduct)