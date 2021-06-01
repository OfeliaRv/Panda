import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editProduct, fetchProduct, deleteProduct } from '../actions/ProductAction'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

const EditProduct = ({ fetchProduct, productsData }) => {
    const { id } = useParams();
    const my_dispatch = useDispatch();
    const [data, setData] = useState({});

    useEffect(() => {
        fetchProduct(id);
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

        var textfield = document.getElementsByClassName('tox-tinymce');
        if (textfield.nodeType == 1) {
            textfield.setAttribute("aria-disabled", false);
            textfield.classList.remove('tox-tinymce--disabled');
        }
    }

    return (
        <div className="add-component" id="add-product">
            <div className="add-component-heading">
                <h4>Edit Product</h4>
                <div className="heading-buttons">
                    <div className="add-button" onClick={edit}>Edit Product</div>
                    <div className="add-button" style={{ backgroundColor: '#e55d5d' }} onClick={() => my_dispatch(deleteProduct(id))}>Delete Product</div>
                </div>
            </div>
            <form className="add-form" onSubmit={() => my_dispatch(editProduct(id, data))}>
                <div className="add-form-inputs">
                <div className="input-container">
                        <label htmlFor="product-name">Product name</label>
                        <input type="text"  className="input-item" id="product-name" placeholder="Add product name" defaultValue={productsData.product.name} onChange={e => setData(prevState => ({ ...prevState, name: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-altname">Product alt name</label>
                        <input type="text"  className="input-item" id="product-altname" placeholder="Add alt name" defaultValue={productsData.product.altName} onChange={e => setData(prevState => ({ ...prevState, altName: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-keywords">Product keywords</label>
                        <input type="text"  className="input-item" id="product-keywords" placeholder="Add keywords" defaultValue={productsData.product.keywords} onChange={e => setData(prevState => ({ ...prevState, keywords: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="product-image">Producter photo</label>
                        {productsData.product.photo && <img id="edit-image" src={"../../img/" + productsData.product.photo} alt={productsData.product.fullName}></img>}
                        <input className="input-item" type="file" id="product-image" defaultValue={productsData.product.photo} onChange={e => setData(prevState => ({ ...prevState, photo: e.target.value }))} disabled />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Product content</h5>
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
                    <textarea className="input-item" id="product-text" defaultValue={productsData.product.productText} onChange={e => setData(prevState => ({ ...prevState, productText: e.target.value }))} placeholder="Enter text" disabled required ></textarea>
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