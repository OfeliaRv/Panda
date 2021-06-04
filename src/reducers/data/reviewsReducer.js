import { ACTION_TYPES } from '../../actions/reviewAction'

export const reviewState = {
    loading: false,
    reviews: [],
    error: ''
}

const reviewReducer = (state = reviewState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_REVIEWS_FAILURE:
            return {
                loading: false,
                reviews: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default reviewReducer;