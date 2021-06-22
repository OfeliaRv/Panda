import axios from 'axios'

export const ACTION_TYPES_R = {
    FETCH_RESPONSES_REQUEST: 'FETCH_RESPONSES_REQUEST',
    FETCH_RESPONSES_SUCCESS: 'FETCH_RESPONSES_SUCCESS',
    FETCH_RESPONSES_FAILURE: 'FETCH_RESPONSES_FAILURE',

    DELETE_RESPONSE_SUCCESS: 'DELETE_RESPONSE_SUCCESS',
    DELETE_RESPONSE_FAILURE: 'DELETE_RESPONSE_FAILURE'
}

export const fetchResponses = id => {
    return (dispatch) => {
        dispatch(fetchResponsesRequest())
        axios
            .get('/Forum/' + id + '/Responses')
            .then(res => {
                dispatch(fetchResponsesSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchResponsesFailure(error.response))
            })
    }
}

export const deleteResponse = (response_id, topic_id) => {
    return (dispatch) => {
        if (confirm("Are you sure you want to delete this item? You won't be able to restore it")) {
            axios
                .delete(`/Forum/${topic_id}/Response/${response_id}`)
                .then(
                    alert('Response successfully deleted!'),
                    window.location.replace("/responses")
                )
                .catch(error => {
                    dispatch(deleteResponseFailure(error.response))
                })
        }
    }
}

// FETCH
export function fetchResponsesRequest() {
    return {
        type: ACTION_TYPES_R.FETCH_RESPONSES_REQUEST
    }
}

export function fetchResponsesSuccess(responses) {
    return {
        type: ACTION_TYPES_R.FETCH_RESPONSES_SUCCESS,
        payload: responses
    }
}

export function fetchResponsesFailure(error) {
    return {
        type: ACTION_TYPES_R.FETCH_RESPONSES_FAILURE,
        payload: error
    }
}

// DELETE
export function deleteResponseFailure(error) {
    return {
        type: ACTION_TYPES_R.DELETE_RESPONSE_FAILURE,
        payload: error
    }
}