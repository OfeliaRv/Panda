const user = {
    username: '',
    email: ''
}

const authReducer = (state = user, action) => {
    switch (action.type) {
        case 'LOGIN':
            return 0;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
}

export default authReducer;