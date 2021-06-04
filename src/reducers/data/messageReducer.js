import { ACTION_TYPES } from '../../actions/messageAction'

export const messageState = {
    messages: [],
    error: ''
}

const messageReducer = (state = messageState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_MESSAGE_SUCCESS:
            const added_message = state.messages.concat(action.payload);
            return {
                messages: [...state.messages, added_message],
                error: ''
            }
        case ACTION_TYPES.ADD_MESSAGE_FAILURE:
            return {
                messages: state.messages,
                error: action.payload
            }
        default:
            return state;
    }
}

export default messageReducer;