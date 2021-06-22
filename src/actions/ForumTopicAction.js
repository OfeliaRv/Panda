import axios from 'axios'

export const ACTION_TYPES_T = {
    FETCH_TOPICS_REQUEST: 'FETCH_TOPICS_REQUEST',
    FETCH_TOPICS_SUCCESS: 'FETCH_TOPICS_SUCCESS',
    FETCH_TOPIC_SUCCESS: 'FETCH_TOPIC_SUCCESS',
    FETCH_TOPICS_FAILURE: 'FETCH_TOPICS_FAILURE',

    EDIT_TOPIC_SUCCESS: 'EDIT_TOPIC_SUCCESS',
    EDIT_TOPIC_FAILURE: 'EDIT_TOPIC_FAILURE',

    DELETE_TOPIC_SUCCESS: 'DELETE_TOPIC_SUCCESS',
    DELETE_TOPIC_FAILURE: 'DELETE_TOPIC_FAILURE'
}

export const fetchTopics = () => {
    return (dispatch) => {
        dispatch(fetchTopicsRequest())
        axios
            .get('/Forum/All')
            .then(res => {
                dispatch(fetchTopicsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchTopicsFailure(error.topic))
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
                dispatch(fetchTopicsFailure(error.topic))
            })
    }
}

export const changeTopicStatus = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`/Forum/${id}/Status`, "\"" + data + "\"", { headers: {'Content-Type': 'application/json-patch+json'} })
            .then(res => {
                console.log("status updated:", res.data);
                dispatch(editTopicSuccess(id, res.data));
                alert('Topic status was successfully updated!');
                window.location.reload();
            })
            .catch(error => {
                dispatch(editTopicFailure(error.message))
            })
    }
}

export const deleteTopic = id => {
    return (dispatch) => {
        if (confirm("Are you sure you want to delete this item? You won't be able to restore it")) {
            axios
                .delete(`/Forum/${id}`)
                .then(
                    alert('Topic successfully deleted!'),
                    window.location.replace("/topics")
                )
                .catch(error => {
                    dispatch(deleteTopicFailure(error.topic))
                })
        }
    }
}

// FETCH
export function fetchTopicsRequest() {
    return {
        type: ACTION_TYPES_T.FETCH_TOPICS_REQUEST
    }
}

export function fetchTopicsSuccess(topics) {
    return {
        type: ACTION_TYPES_T.FETCH_TOPICS_SUCCESS,
        payload: topics
    }
}

export function fetchTopicSuccess(topic) {
    return {
        type: ACTION_TYPES_T.FETCH_TOPIC_SUCCESS,
        payload: topic
    }
}

export function fetchTopicsFailure(error) {
    return {
        type: ACTION_TYPES_T.FETCH_TOPICS_FAILURE,
        payload: error
    }
}

// EDIT
export function editTopicSuccess(id, topic) {
    return {
        type: ACTION_TYPES_T.EDIT_TOPIC_SUCCESS,
        id: id,
        payload: topic
    }
}

export function editTopicFailure(error) {
    return {
        type: ACTION_TYPES_T.EDIT_TOPIC_FAILURE,
        payload: error
    }
}

// DELETE
export function deleteTopicFailure(error) {
    return {
        type: ACTION_TYPES_T.DELETE_TOPIC_FAILURE,
        payload: error
    }
}


