import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCT_SUCCESS: 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',

    ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
    ADD_PRODUCT_FAILURE: 'ADD_PRODUCT_FAILURE',

    EDIT_PRODUCT_SUCCESS: 'EDIT_PRODUCT_SUCCESS',
    EDIT_PRODUCT_FAILURE: 'EDIT_PRODUCT_FAILURE',

    DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_FAILURE: 'DELETE_PRODUCT_FAILURE'
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios
            .get('/Product')
            .then(res => {
                dispatch(fetchProductsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error.message))
            })
    }
}

export function fetchProduct(id) {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios
            .get('/Product/' + id)
            .then(res => {
                dispatch(fetchProductSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error.message))
            })
    }
}

export const addProduct = data => {
    return (dispatch) => {
        axios.post('/Product', data)
            .then(res => {
                dispatch(addProductSuccess(res.data));
                alert('Product successfully added!');
                window.location.replace("/products");
            })
            .catch(error => {
                dispatch(addProductFailure(error.message))
            })
    }
}

export const editProduct = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`/Product/${id}`, data)
            .then(res => {
                console.log("updated products:", res.data);
                dispatch(editProductSuccess(id, res.data));
                alert('Product successfully edited!');
            })
            .catch(error => {
                dispatch(editProductFailure(error.message))
            })
    }
}

export const deleteProduct = id => {
    return (dispatch) => {
        if (confirm("Are you sure you want to delete this item? You won't be able to restore it")) {
            axios
                .delete(`/Product/${id}`)
                .then(
                    alert('News successfully deleted!'),
                    window.location.replace("/products")
                )
                .catch(error => {
                    dispatch(deleteProductFailure(error.message))
                })
        }
    }
}

// FETCH
export function fetchProductsRequest() {
    return {
        type: ACTION_TYPES.FETCH_PRODUCTS_REQUEST
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function fetchProductSuccess(product) {
    return {
        type: ACTION_TYPES.FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

export function fetchProductsFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

// ADD
export function addProductSuccess(product) {
    return {
        type: ACTION_TYPES.ADD_PRODUCT_SUCCESS,
        payload: product
    }
}

export function addProductFailure(error) {
    return {
        type: ACTION_TYPES.ADD_PRODUCT_FAILURE,
        payload: error
    }
}


// EDIT
export function editProductSuccess(id, product) {
    return {
        type: ACTION_TYPES.EDIT_PRODUCT_SUCCESS,
        id: id,
        payload: product
    }
}

export function editProductFailure(error) {
    return {
        type: ACTION_TYPES.EDIT_PRODUCT_FAILURE,
        payload: error
    }
}

// DELETE
export function deleteProductFailure(error) {
    return {
        type: ACTION_TYPES.DELETE_PRODUCT_FAILURE,
        payload: error
    }
}