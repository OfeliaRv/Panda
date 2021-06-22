import { ACTION_TYPES } from '../actions/ProductAction'

export const productState = {
    loading: false,
    products: [],
    product: {},
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
                product: {},
                products: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload,
                products: [],
                error: ''
            }
        case ACTION_TYPES.FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                product: {},
                error: action.payload
            }
        case ACTION_TYPES.ADD_PRODUCT_SUCCESS:
            const added_product = state.products.concat(action.payload);
            return {
                loading: false,
                products: [...state.products, added_product],
                error: ''
            }
        case ACTION_TYPES.ADD_PRODUCT_FAILURE:
            return {
                loading: false,
                products: state.products,
                error: action.payload
            }
        case ACTION_TYPES.EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.map(
                    content => content.id === action.id ? { content: action.payload } : content
                )
            }
        case ACTION_TYPES.EDIT_PRODUCT_FAILURE:
            return {
                loading: false,
                products: state.products,
                error: action.payload
            }
        case ACTION_TYPES.DELETE_PRODUCT_FAILURE:
            return {
                loading: false,
                products: state.products,
                error: action.payload
            }
        default:
            return state;
    }
}
 
export default productReducer;