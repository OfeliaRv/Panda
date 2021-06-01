import { ACTION_TYPES } from '../actions/ReviewAction'

export const reviewState = {
    loading: false,
    reviews: [],
    review: {},
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
                review: {},
                reviews: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_REVIEW_SUCCESS:
            return {
                loading: false,
                review: action.payload,
                reviews: [],
                error: ''
            }
        case ACTION_TYPES.FETCH_REVIEWS_FAILURE:
            return {
                loading: false,
                reviews: [],
                review: {},
                error: action.payload
            }
        case ACTION_TYPES.ADD_REVIEW_SUCCESS:
            const added_review = state.reviews.concat(action.payload);
            return {
                loading: false,
                reviews: [...state.reviews, added_review],
                error: ''
            }
        case ACTION_TYPES.ADD_REVIEW_FAILURE:
            return {
                loading: false,
                reviews: state.reviews,
                error: action.payload
            }

        case ACTION_TYPES.EDIT_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: state.reviews.map(
                    content => content.id === action.id ? { content: action.payload } : content
                )
            }
        case ACTION_TYPES.EDIT_REVIEW_FAILURE:
            return {
                loading: false,
                reviews: state.reviews,
                error: action.payload
            }
        case ACTION_TYPES.DELETE_REVIEW_FAILURE:
            return {
                loading: false,
                reviews: state.reviews,
                error: action.payload
            }
        default:
            return state;
    }
}
 
export default reviewReducer;