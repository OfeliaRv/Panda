import { ACTION_TYPES } from '../../actions/productAction'

export const productState = {
    loading: false,
    product: {},
    products: [],
    error: ''
}

const productReducer = (state = productState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                product: {},
                error: ''
            }
        case ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: [],
                product: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                product: {},
                error: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;