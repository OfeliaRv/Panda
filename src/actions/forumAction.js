import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_TOPICS_REQUEST: 'FETCH_TOPICS_REQUEST',
    FETCH_TOPIC_SUCCESS: 'FETCH_TOPIC_SUCCESS',
    FETCH_TOPICS_SUCCESS: 'FETCH_TOPICS_SUCCESS',
    FETCH_TOPICS_FAILURE: 'FETCH_TOPICS_FAILURE',

    FETCH_RESPONSES_REQUEST: 'FETCH_RESPONSES_REQUEST',
    FETCH_RESPONSE_SUCCESS: 'FETCH_RESPONSE_SUCCESS',
    FETCH_RESPONSES_SUCCESS: 'FETCH_RESPONSES_SUCCESS',
    FETCH_RESPONSES_FAILURE: 'FETCH_RESPONSES_FAILURE',

    ADD_TOPIC_SUCCESS: 'ADD_TOPIC_SUCCESS',
    ADD_TOPIC_FAILURE: 'ADD_TOPIC_FAILURE',

    ADD_RESPONSE_SUCCESS: 'ADD_RESPONSE_SUCCESS',
    ADD_RESPONSE_FAILURE: 'ADD_RESPONSE_FAILURE'
}

export const fetchTopics = () => {
    return (dispatch) => {
        dispatch(fetchTopicsRequest())
        axios
            .get('/Forum')
            .then(res => {
                dispatch(fetchTopicsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchTopicsFailure(error.message))
            })
    }
}

export function fetchTopic(id) {
    return (dispatch) => {
        dispatch(fetchTopicsRequest())
        axios
            .get('/Forum/' + id)
            .then(res => {
                dispatch(fetchTopicSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchTopicsFailure(error.message))
            })
    }
}

export  function fetchResponses(id) {  // id -> topic id
    return (dispatch) => {
        dispatch(fetchResponsesRequest())
        axios
            .get('/Forum/Response/' + id)
            .then(res => {
                dispatch(fetchResponsesSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchResponsesFailure(error.message))
            })
    }
}

// Fetch topics
export function fetchTopicsRequest() {
    return {
        type: ACTION_TYPES.FETCH_TOPICS_REQUEST
    }
}

export function fetchTopicSuccess(topic) {
    return {
        type: ACTION_TYPES.FETCH_TOPIC_SUCCESS,
        payload: topic
    }
}

export function fetchTopicsSuccess(topics) {
    return {
        type: ACTION_TYPES.FETCH_TOPICS_SUCCESS,
        payload: topics
    }
}

export function fetchTopicsFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_TOPICS_FAILURE,
        payload: error
    }
}


// Fetch responses
export function fetchResponsesRequest() {
    return {
        type: ACTION_TYPES.FETCH_RESPONSES_REQUEST
    }
}

export function fetchResponseSuccess(response) {
    return {
        type: ACTION_TYPES.FETCH_RESPONSE_SUCCESS,
        payload: response
    }
}

export function fetchResponsesSuccess(responses) {
    return {
        type: ACTION_TYPES.FETCH_RESPONSES_SUCCESS,
        payload: responses
    }
}

export function fetchResponsesFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_RESPONSES_FAILURE,
        payload: error
    }
}

// Add topic
export function addTopicSuccess(topic) {
    return {
        type: ACTION_TYPES.ADD_TOPIC_SUCCESS,
        payload: topic
    }
}

export function addTopicFailure(error) {
    return {
        type: ACTION_TYPES.ADD_TOPIC_FAILURE,
        payload: error
    }
}

// Add response
export function addResponseSuccess(response) {
    return {
        type: ACTION_TYPES.ADD_RESPONSE_SUCCESS,
        payload: response
    }
}

export function addResponseFailure(error) {
    return {
        type: ACTION_TYPES.ADD_RESPONSE_FAILURE,
        payload: error
    }
}