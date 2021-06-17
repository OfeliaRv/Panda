import { ACTION_TYPES } from '../../actions/forumAction'

export const forumState = {
    loading_topic: false,
    loading_responses: false,
    topics: [],
    topic: {},
    responses: [],
    error_topic: '',
    error_responses: ''
}

const forumReducer = (state = forumState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_TOPICS_REQUEST:
            return {
                ...state,
                loading_topic: true
            }
        case ACTION_TYPES.FETCH_TOPICS_SUCCESS:
            return {
                ...state,
                loading_topic: false,
                topic: {},
                topics: action.payload,
                error_topic: ''
            }
        case ACTION_TYPES.FETCH_TOPIC_SUCCESS:
            return {
                ...state,
                loading_topic: false,
                topic: action.payload,
                topics: [],
                error_topic: ''
            }
        case ACTION_TYPES.FETCH_TOPICS_FAILURE:
            return {
                ...state,
                loading_topic: false,
                topics: [],
                topic: {},
                error_topic: action.payload
            }
        case ACTION_TYPES.FETCH_RESPONSES_REQUEST:
            return {
                ...state,
                loading_responses: true
            }
        case ACTION_TYPES.FETCH_RESPONSES_SUCCESS:
            return {
                ...state,
                loading_responses: false,
                responses: action.payload,
                error_responses: ''
            }
        case ACTION_TYPES.FETCH_RESPONSES_FAILURE:
            return {
                ...state,
                loading_responses: false,
                responses: [],
                error_responses: action.payload
            }
        case ACTION_TYPES.ADD_TOPIC_SUCCESS:
            const added_topic = state.topics.concat(action.payload);
            return {
                loading: false,
                topics: [...state.topics, added_topic],
                error_topics: ''
            }
        case ACTION_TYPES.ADD_TOPIC_FAILURE:
            return {
                loading: false,
                topics: state.topics,
                error_topics: action.payload
            }
        case ACTION_TYPES.ADD_RESPONSE_SUCCESS:
            const added_response = state.responses.concat(action.payload);
            return {
                ...state,
                loading_responses: false,
                responses: [...state.responses, added_response],
                error_responses: ''
            }
        case ACTION_TYPES.ADD_RESPONSE_FAILURE:
            return {
                ...state,
                loading_responses: false,
                topics: state.topics,
                error_responses: action.payload
            }
        default:
            return state;
    }
}

export default forumReducer;