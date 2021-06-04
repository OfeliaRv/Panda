import { ACTION_TYPES } from '../actions/MessageAction'

export const messageState = {
    loading: false,
    messages: [],
    message: {},
    error: ''
}

const messageReducer = (state = messageState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_MESSAGES_SUCCESS:
            return {
                loading: false,
                message: {},
                messages: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_MESSAGE_SUCCESS:
            return {
                loading: false,
                message: action.payload,
                messages: [],
                error: ''
            }
        case ACTION_TYPES.FETCH_MESSAGES_FAILURE:
            return {
                loading: false,
                messages: [],
                message: {},
                error: action.payload
            }
        case ACTION_TYPES.DELETE_MESSAGE_FAILURE:
            return {
                loading: false,
                messages: state.messages,
                error: action.payload
            }
        default:
            return state;
    }
}
 
export default messageReducer;