import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_NEWS_REQUEST: 'FETCH_NEWS_REQUEST',
    FETCH_ONE_NEWS_SUCCESS: 'FETCH_ONE_NEWS_SUCCESS',
    FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
    FETCH_NEWS_FAILURE: 'FETCH_NEWS_FAILURE'
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

export function fetchNewsRequest() {
    return {
        type: ACTION_TYPES.FETCH_NEWS_REQUEST
    }
}

export function fetchOneNewsSuccess(news) {
    return {
        type: ACTION_TYPES.FETCH_ONE_NEWS_SUCCESS,
        payload: news
    }
}

export function fetchNewsSuccess(news) {
    return {
        type: ACTION_TYPES.FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export function fetchNewsFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_NEWS_FAILURE,
        payload: error
    }
}