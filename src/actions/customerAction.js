import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_CUSTOMERS_REQUEST: 'FETCH_CUSTOMERS_REQUEST',
    FETCH_CUSTOMERS_SUCCESS: 'FETCH_CUSTOMERS_SUCCESS',
    FETCH_CUSTOMERS_FAILURE: 'FETCH_CUSTOMERS_FAILURE'
}

export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch(fetchCustomersRequest())
        axios
            .get('/Company')
            .then(res => {
                dispatch(fetchCustomersSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchCustomersFailure(error.message))
            })
    }
}

export function fetchCustomersRequest() {
    return {
        type: ACTION_TYPES.FETCH_CUSTOMERS_REQUEST
    }
}

export function fetchCustomersSuccess(customers) {
    return {
        type: ACTION_TYPES.FETCH_CUSTOMERS_SUCCESS,
        payload: customers
    }
}

export function fetchCustomersFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_CUSTOMERS_FAILURE,
        payload: error
    }
}