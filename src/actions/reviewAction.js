import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_REVIEWS_REQUEST: 'FETCH_REVIEWS_REQUEST',
    FETCH_REVIEWS_SUCCESS: 'FETCH_REVIEWS_SUCCESS',
    FETCH_REVIEWS_FAILURE: 'FETCH_REVIEWS_FAILURE'
}

export const fetchReviews = () => {
    return (dispatch) => {
        dispatch(fetchReviewsRequest())
        axios
            .get('/Review')
            .then(res => {
                dispatch(fetchReviewsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchReviewsFailure(error.message))
            })
    }
}

export function fetchReviewsRequest() {
    return {
        type: ACTION_TYPES.FETCH_REVIEWS_REQUEST
    }
}

export function fetchReviewsSuccess(reviews) {
    return {
        type: ACTION_TYPES.FETCH_REVIEWS_SUCCESS,
        payload: reviews
    }
}

export function fetchReviewsFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_REVIEWS_FAILURE,
        payload: error
    }
}