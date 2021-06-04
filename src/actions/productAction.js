import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCT_SUCCESS: 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE'
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

export function fetchProductsRequest() {
    return {
        type: ACTION_TYPES.FETCH_PRODUCTS_REQUEST
    }
}

export function fetchProductSuccess(product) {
    return {
        type: ACTION_TYPES.FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function fetchProductsFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}