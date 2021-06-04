import axios from 'axios'

export const ACTION_TYPES = {
    ADD_MESSAGE_SUCCESS: 'ADD_MESSAGE_SUCCESS',
    ADD_MESSAGE_FAILURE: 'ADD_MESSAGE_FAILURE'
}

export const addMessage = data => {
    console.log(data);
    
    return (dispatch) => {
        axios.post('/Message', data)
            .then(res => {
                dispatch(addMessageSuccess(res.data));
                alert('Message was successfully sent!');
            })
            .catch(error => {
                dispatch(addMessageFailure(error.message))
            })
    }
}

// ADD
export function addMessageSuccess(message) {
    return {
        type: ACTION_TYPES.ADD_MESSAGE_SUCCESS,
        payload: message
    }
}

export function addMessageFailure(error) {
    return {
        type: ACTION_TYPES.ADD_MESSAGE_FAILURE,
        payload: error
    }
}

