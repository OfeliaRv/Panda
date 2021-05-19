import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_NEWS_REQUEST: 'FETCH_NEWS_REQUEST',
    FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
    FETCH_NEWS_FAILURE: 'FETCH_NEWS_FAILURE'
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

export function fetchNewsRequest() {
    // console.log("im here")
    return {
        type: ACTION_TYPES.FETCH_NEWS_REQUEST
    }
}

export function fetchNewsSuccess(news) {
    console.log("im here");
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