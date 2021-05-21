export const user = {
    user: {},
    error: ''
}

const authReducer = (state = user, action) => {
    switch (action.type) {
        case 'REGISTER_USER_SUCCESS':
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_USER_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN_USER_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        case 'USER_LOGOUT':
            return state;
        default:
            return state;
    }
}

export default authReducer;