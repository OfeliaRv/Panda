import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_REVIEWS_REQUEST: 'FETCH_REVIEWS_REQUEST',
    FETCH_REVIEWS_SUCCESS: 'FETCH_REVIEWS_SUCCESS',
    FETCH_REVIEW_SUCCESS: 'FETCH_REVIEW_SUCCESS',
    FETCH_REVIEWS_FAILURE: 'FETCH_REVIEWS_FAILURE',

    ADD_REVIEW_SUCCESS: 'ADD_REVIEW_SUCCESS',
    ADD_REVIEW_FAILURE: 'ADD_REVIEW_FAILURE',

    EDIT_REVIEW_SUCCESS: 'EDIT_REVIEW_SUCCESS',
    EDIT_REVIEW_FAILURE: 'EDIT_REVIEW_FAILURE',

    DELETE_REVIEW_SUCCESS: 'DELETE_REVIEW_SUCCESS',
    DELETE_REVIEW_FAILURE: 'DELETE_REVIEW_FAILURE'
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

export function fetchReview(id) {
    return (dispatch) => {
        dispatch(fetchReviewsRequest())
        axios
            .get('/Review/' + id)
            .then(res => {
                dispatch(fetchReviewSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchReviewsFailure(error.message))
            })
    }
}

export const addReviews = data => {
    return (dispatch) => {
        axios.post('/Review', data)
            .then(res => {
                dispatch(addReviewsSuccess(res.data));
                alert('Review successfully added!');
                window.location.replace("/reviews");
            })
            .catch(error => {
                dispatch(addReviewsFailure(error.message))
            })
    }
}

export const editReviews = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`/Review/${id}`, data)
            .then(res => {
                console.log("updated reviews:", res.data);
                dispatch(editReviewsSuccess(id, res.data));
                alert('Review successfully edited!');
            })
            .catch(error => {
                dispatch(editReviewsFailure(error.message))
            })
    }
}

export const deleteReviews = id => {
    return (dispatch) => {
        axios
            .delete(`/Review/${id}`)
            .then(res => {
                console.log("updated review:", res.data);
                alert('Review successfully deleted!');
                window.location.replace("/reviews");
            })
            .catch(error => {
                dispatch(deleteReviewsFailure(error.message))
            })
    }
}

// FETCH
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

export function fetchReviewSuccess(review) {
    return {
        type: ACTION_TYPES.FETCH_REVIEW_SUCCESS,
        payload: review
    }
}

export function fetchReviewsFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_REVIEWS_FAILURE,
        payload: error
    }
}

// ADD
export function addReviewSuccess(review) {
    return {
        type: ACTION_TYPES.ADD_REVIEW_SUCCESS,
        payload: review
    }
}

export function addReviewFailure(error) {
    return {
        type: ACTION_TYPES.ADD_REVIEW_FAILURE,
        payload: error
    }
}


// EDIT
export function editReviewSuccess(id, review) {
    return {
        type: ACTION_TYPES.EDIT_REVIEW_SUCCESS,
        id: id,
        payload: review
    }
}

export function editReviewsFailure(error) {
    return {
        type: ACTION_TYPES.EDIT_REVIEW_FAILURE,
        payload: error
    }
}

// DELETE
export function deleteReviewsFailure(error) {
    return {
        type: ACTION_TYPES.DELETE_REVIEW_FAILURE,
        payload: error
    }
}