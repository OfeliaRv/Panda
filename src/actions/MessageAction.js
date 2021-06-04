import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_MESSAGES_REQUEST: 'FETCH_MESSAGES_REQUEST',
    FETCH_MESSAGES_SUCCESS: 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGE_SUCCESS: 'FETCH_MESSAGE_SUCCESS',
    FETCH_MESSAGES_FAILURE: 'FETCH_MESSAGES_FAILURE',

    DELETE_MESSAGE_SUCCESS: 'DELETE_MESSAGE_SUCCESS',
    DELETE_MESSAGE_FAILURE: 'DELETE_MESSAGE_FAILURE'
}

export const fetchMessages = () => {
    return (dispatch) => {
        dispatch(fetchMessagesRequest())
        axios
            .get('/Message')
            .then(res => {
                dispatch(fetchMessagesSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchMessagesFailure(error.message))
            })
    }
}

export function fetchMessage(id) {
    return (dispatch) => {
        dispatch(fetchMessagesRequest())
        axios
            .get('/Message/' + id)
            .then(res => {
                dispatch(fetchMessageSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchMessagesFailure(error.message))
            })
    }
}

export const deleteMessage = id => {
    return (dispatch) => {
        if (confirm("Are you sure you want to delete this item? You won't be able to restore it")) {
            axios
                .delete(`/Message/${id}`)
                .then(
                    alert('News successfully deleted!'),
                    window.location.replace("/messages")
                )
                .catch(error => {
                    dispatch(deleteMessageFailure(error.message))
                })
        }
    }
}

// FETCH
export function fetchMessagesRequest() {
    return {
        type: ACTION_TYPES.FETCH_MESSAGES_REQUEST
    }
}

export function fetchMessagesSuccess(messages) {
    return {
        type: ACTION_TYPES.FETCH_MESSAGES_SUCCESS,
        payload: messages
    }
}

export function fetchMessageSuccess(message) {
    return {
        type: ACTION_TYPES.FETCH_MESSAGE_SUCCESS,
        payload: message
    }
}

export function fetchMessagesFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_MESSAGES_FAILURE,
        payload: error
    }
}

// DELETE
export function deleteMessageFailure(error) {
    return {
        type: ACTION_TYPES.DELETE_MESSAGE_FAILURE,
        payload: error
    }
}