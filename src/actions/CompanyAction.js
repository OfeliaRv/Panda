import axios from 'axios'

export const ACTION_TYPES = {
    FETCH_COMPANIES_REQUEST: 'FETCH_COMPANIES_REQUEST',
    FETCH_COMPANIES_SUCCESS: 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANY_SUCCESS: 'FETCH_COMPANY_SUCCESS',
    FETCH_COMPANIES_FAILURE: 'FETCH_COMPANIES_FAILURE',

    ADD_COMPANY_SUCCESS: 'ADD_COMPANY_SUCCESS',
    ADD_COMPANY_FAILURE: 'ADD_COMPANY_FAILURE',

    EDIT_COMPANY_SUCCESS: 'EDIT_COMPANY_SUCCESS',
    EDIT_COMPANY_FAILURE: 'EDIT_COMPANY_FAILURE',

    DELETE_COMPANY_SUCCESS: 'DELETE_COMPANY_SUCCESS',
    DELETE_COMPANY_FAILURE: 'DELETE_COMPANY_FAILURE'
}

export const fetchCompanies = () => {
    return (dispatch) => {
        dispatch(fetchCompaniesRequest())
        axios
            .get('/Company')
            .then(res => {
                dispatch(fetchCompaniesSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchCompaniesFailure(error.message))
            })
    }
}

export function fetchCompany(id) {
    return (dispatch) => {
        dispatch(fetchCompaniesRequest())
        axios
            .get('/Company/' + id)
            .then(res => {
                dispatch(fetchCompanySuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchCompaniesFailure(error.message))
            })
    }
}

export const addCompany = data => {
    return (dispatch) => {
        axios.post('/Company', data)
            .then(res => {
                dispatch(addCompanySuccess(res.data));
                alert('Company successfully added!');
                window.location.replace("/companies");
            })
            .catch(error => {
                dispatch(addCompanyFailure(error.message))
            })
    }
}

export const editCompany = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`/Company/${id}`, data)
            .then(res => {
                dispatch(editCompanySuccess(id, res.data));
                alert('Company successfully edited!');
            })
            .catch(error => {
                dispatch(editCompanyFailure(error.message))
            })
    }
}

export const deleteCompany = id => {
    return (dispatch) => {
        if (confirm("Are you sure you want to delete this item? You won't be able to restore it")) {
            axios
                .delete(`/Company/${id}`)
                .then(res => {
                    alert('Company successfully deleted!');
                    window.location.replace("/companies");
                })
                .catch(error => {
                    dispatch(deleteCompanyFailure(error.message))
                })
        }
    }
}

// FETCH
export function fetchCompaniesRequest() {
    return {
        type: ACTION_TYPES.FETCH_COMPANIES_REQUEST
    }
}

export function fetchCompaniesSuccess(companies) {
    return {
        type: ACTION_TYPES.FETCH_COMPANIES_SUCCESS,
        payload: companies
    }
}

export function fetchCompanySuccess(company) {
    return {
        type: ACTION_TYPES.FETCH_COMPANY_SUCCESS,
        payload: company
    }
}

export function fetchCompaniesFailure(error) {
    return {
        type: ACTION_TYPES.FETCH_COMPANIES_FAILURE,
        payload: error
    }
}

// ADD
export function addCompanySuccess(company) {
    return {
        type: ACTION_TYPES.ADD_COMPANY_SUCCESS,
        payload: company
    }
}

export function addCompanyFailure(error) {
    return {
        type: ACTION_TYPES.ADD_COMPANY_FAILURE,
        payload: error
    }
}


// EDIT
export function editCompanySuccess(id, company) {
    return {
        type: ACTION_TYPES.EDIT_COMPANY_SUCCESS,
        id: id,
        payload: company
    }
}

export function editCompanyFailure(error) {
    return {
        type: ACTION_TYPES.EDIT_COMPANY_FAILURE,
        payload: error
    }
}

// DELETE
export function deleteCompanyFailure(error) {
    return {
        type: ACTION_TYPES.DELETE_COMPANY_FAILURE,
        payload: error
    }
}