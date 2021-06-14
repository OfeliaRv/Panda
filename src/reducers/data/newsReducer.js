import { ACTION_TYPES } from '../../actions/newsAction'

export const newsState = {
    loading: false,
    one_news: {},
    news: [],
    error: ''
}

const newsReducer = (state = newsState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_ONE_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                one_news: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_NEWS_FAILURE:
            return {
                loading: false,
                one_news: {},
                news: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default newsReducer;