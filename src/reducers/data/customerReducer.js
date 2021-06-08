import { ACTION_TYPES } from '../../actions/customerAction'

export const customerState = {
    loading: false,
    customers: [],
    error: ''
}

const customerReducer = (state = customerState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_CUSTOMERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_CUSTOMERS_SUCCESS:
            return {
                loading: false,
                customers: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_CUSTOMERS_FAILURE:
            return {
                loading: false,
                customers: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default customerReducer;