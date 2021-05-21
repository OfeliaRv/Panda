import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_NEWS_REQUEST: 'FETCH_NEWS_REQUEST',
    FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
    FETCH_ONE_NEWS_SUCCESS: 'FETCH_ONE_NEWS_SUCCESS',
    FETCH_NEWS_FAILURE: 'FETCH_NEWS_FAILURE',

    ADD_NEWS_SUCCESS: 'ADD_NEWS_SUCCESS',
    ADD_NEWS_FAILURE: 'ADD_NEWS_FAILURE',

    EDIT_NEWS_SUCCESS: 'EDIT_NEWS_SUCCESS',
    EDIT_NEWS_FAILURE: 'EDIT_NEWS_FAILURE'
}

export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsRequest())
        axios
            .get('/News')
            .then(res => {
                const news = res.data;
                console.log(news);
                // console.log(res.data);
                dispatch(fetchNewsSuccess(news));
            })
            .catch(error => {
                dispatch(fetchNewsFailure(error.message))
            })
    }
}

export function fetchOneNews(id) {
    return (dispatch) => {
        console.log(id);
        dispatch(fetchNewsRequest())
        axios
            .get('/News/' + id)
            .then(res => {
                console.log(res.data);
                const one_news = res.data;
                dispatch(fetchOneNewsSuccess(one_news));
            })
            .catch(error => {
                dispatch(fetchNewsFailure(error.message))
            })
    }
}

export const addNews = data => {
    return (dispatch) => {
        console.log(data);
        axios.post('/News', data)
            .then(res => {
                dispatch(addNewsSuccess(res.data));
                alert('News successfully added!');
                console.log(res.data);
            })
            .catch(error => {
                dispatch(addNewsFailure(error.message))
            })
    }
}

export const editNews = id => {
    return (dispatch) => {
        console.log(id);
        axios
            .patch(`/News/${id}`)
            .then(res => {
                const news = res.data;
                console.log(news);
                dispatch(editNewsSuccess(news));
            })
            .catch(error => {
                dispatch(editNewsFailure(error.message))
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
// export function addNewsRequest() {
//     return {
//         type: ACTION_TYPES.ADD_NEWS_REQUEST
//     }
// }

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
export function editNewsSuccess(news) {
    return {
        type: ACTION_TYPES.EDIT_NEWS_SUCCESS,
        payload: news
    }
}

export function editNewsFailure(error) {
    return {
        type: ACTION_TYPES.EDIT_NEWS_FAILURE,
        payload: error
    }
}