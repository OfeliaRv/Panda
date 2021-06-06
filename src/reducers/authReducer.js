import { ACTION_TYPES } from '../actions/AuthAction'

export const user = {
    user: {},
    error: ''
}

const authReducer = (state = user, action) => {
    switch (action.type) {
        case ACTION_TYPES.REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case ACTION_TYPES.REGISTER_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ACTION_TYPES.LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case ACTION_TYPES.LOGIN_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ACTION_TYPES.USER_LOGOUT:
            return state;
        default:
            return state;
    }
}

export default authReducer;