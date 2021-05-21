import axios from 'axios'

export const ACTION_TYPES = {
    REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
    REGISTER_USER_FAILURE: 'REGISTER_USER_FAILURE',

    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',

    USER_LOGOUT: 'USER_LOGOUT'
}

export const register = data => {
    return (dispatch) => {
        console.log(data);
        axios.post('/Authentication/RegisterAdmin', data)
            .then(res => {
                dispatch(registerUserSuccess(res.data));
                // console.log("token: " + res.data.token);
                // localStorage.setItem('token', res.data.token);
                alert("Admin Register Successful!");
            })
            .catch(error => {
                dispatch(registerUserFailure(error.message));
            })
    }
}

export const login = data => {
    return (dispatch) => {
        console.log(data);
        axios.post('/Authentication/Login', data)
            .then(res => {
                console.log("res", res);
                window.location.reload();
                //dispatch(loginUserSuccess(res.data));
                // console.log("token: " + res.data.token);
                // localStorage.setItem('token', res.data.token);
                //alert("User Login Successful!");
            })
            .catch(error => {
                console.log(error.message);
                dispatch(registerUserFailure(error.message));
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutUser());
        alert("User Logout Successful!");
    }
}

export function registerUserSuccess(data) {
    return {
        type: ACTION_TYPES.REGISTER_USER_SUCCESS,
        payload: data
    }
}

export function registerUserFailure(error) {
    return {
        type: ACTION_TYPES.REGISTER_USER_FAILURE,
        payload: error
    }
}

export function loginUserSuccess(data) {
    return {
        type: ACTION_TYPES.LOGIN_USER_SUCCESS,
        payload: data
    };
};

export function loginUserFailure(error) {
    return {
        type: ACTION_TYPES.LOGIN_USER_FAILURE,
        payload: error
    }
}

export function logoutUser() {
    return {
        type: 'LOGOUT'
    };
};
