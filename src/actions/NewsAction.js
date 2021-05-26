import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_NEWS_REQUEST: 'FETCH_NEWS_REQUEST',
    FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
    FETCH_ONE_NEWS_SUCCESS: 'FETCH_ONE_NEWS_SUCCESS',
    FETCH_NEWS_FAILURE: 'FETCH_NEWS_FAILURE',

    ADD_NEWS_SUCCESS: 'ADD_NEWS_SUCCESS',
    ADD_NEWS_FAILURE: 'ADD_NEWS_FAILURE',

    EDIT_NEWS_SUCCESS: 'EDIT_NEWS_SUCCESS',
    EDIT_NEWS_FAILURE: 'EDIT_NEWS_FAILURE',

    DELETE_NEWS_SUCCESS: 'DELETE_NEWS_SUCCESS',
    DELETE_NEWS_FAILURE: 'DELETE_NEWS_FAILURE'
}

export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsRequest())
        axios
            .get('/News')
            .then(res => {
                dispatch(fetchNewsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchNewsFailure(error.message))
            })
    }
}

export function fetchOneNews(id) {
    return (dispatch) => {
        dispatch(fetchNewsRequest())
        axios
            .get('/News/' + id)
            .then(res => {
                dispatch(fetchOneNewsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchNewsFailure(error.message))
            })
    }
}

export const addNews = data => {
    return (dispatch) => {
        axios.post('/News', data)
            .then(res => {
                dispatch(addNewsSuccess(res.data));
                alert('News successfully added!');
                window.location.replace("/news");
            })
            .catch(error => {
                dispatch(addNewsFailure(error.message))
            })
    }
}

export const editNews = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`/News/${id}`, data)
            .then(res => {
                console.log("updated news:", res.data);
                dispatch(editNewsSuccess(id, res.data));
                alert('News successfully edited!');
            })
            .catch(error => {
                dispatch(editNewsFailure(error.message))
            })
    }
}

export const deleteNews = id => {
    return (dispatch) => {
        axios
            .delete(`/News/${id}`)
            .then(res => {
                console.log("updated news:", res.data);
                alert('News successfully deleted!');
                window.location.replace("/news");
            })
            .catch(error => {
                dispatch(deleteNewsFailure(error.message))
            })
    }
}

// FETCH
export function fetchNewsRequest() {
    return {
        type: ACTION_TYPES.FETCH_NEWS_REQUEST
    }
}

export function fetchNewsSuccess(news) {
    return {
        type: ACTION_TYPES.FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export function fetchOneNewsSuccess(news) {
    return {
        type: ACTION_TYPES.FETCH_ONE_NEWS_SUCCESS,
        payload: news
    }
}

export function fetchNewsFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_NEWS_FAILURE,
        payload: error
    }
}

// ADD
export function addNewsSuccess(news) {
    return {
        type: ACTION_TYPES.ADD_NEWS_SUCCESS,
        payload: news
    }
}

export function addNewsFailure(error) {
    return {
        type: ACTION_TYPES.ADD_NEWS_FAILURE,
        payload: error
    }
}


// EDIT
export function editNewsSuccess(id, news) {
    return {
        type: ACTION_TYPES.EDIT_NEWS_SUCCESS,
        id: id,
        payload: news
    }
}

export function editNewsFailure(error) {
    return {
        type: ACTION_TYPES.EDIT_NEWS_FAILURE,
        payload: error
    }
}

// DELETE
export function deleteNewsFailure(error) {
    return {
        type: ACTION_TYPES.DELETE_NEWS_FAILURE,
        payload: error
    }
}