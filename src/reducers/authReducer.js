const user = {
    username: null,
    fullname: null
}

const authReducer = (state = user, action) => {
    switch (action.type) {
        case 'REGISTER':
            state.email = action.data.email
            state.fullname = action.data.fullname
            return state;
        // case 'LOGIN':
        //     state.email = action.data.username
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
}

export default authReducer;