import { ACTION_TYPES } from '../actions/NewsAction'

export const newsState = {
    loading: false,
    news: [],
    one_news: {},
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
                loading: false,
                one_news: {},
                news: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_ONE_NEWS_SUCCESS:
            return {
                loading: false,
                one_news: action.payload,
                news: [],
                error: ''
            }
        case ACTION_TYPES.FETCH_NEWS_FAILURE:
            return {
                loading: false,
                news: [],
                one_news: {},
                error: action.payload
            }
        case ACTION_TYPES.ADD_NEWS_SUCCESS:
            const added_news = state.news.concat(action.payload);
            return {
                loading: false,
                news: [...state.news, added_news],
                error: ''
            }
        case ACTION_TYPES.ADD_NEWS_FAILURE:
            return {
                loading: false,
                news: state.news,
                error: action.payload
            }

        case ACTION_TYPES.EDIT_NEWS_SUCCESS:
            return {
                ...state,
                news: state.news.map(
                    content => content.id === action.id ? { content: action.payload } : content
                )
            }
        case ACTION_TYPES.EDIT_NEWS_FAILURE:
            return {
                loading: false,
                news: state.news,
                error: action.payload
            }
        case ACTION_TYPES.DELETE_NEWS_FAILURE:
            return {
                loading: false,
                news: state.news,
                error: action.payload
            }
        default:
            return state;
    }
}

export default newsReducer;