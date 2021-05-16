export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export function login (data)  {
    return {
        type: 'LOGIN',
        data: data
    };
};

export function register (data) {
    return {
        type: 'REGISTER',
        data: data
    };
};