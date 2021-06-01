import { ACTION_TYPES } from '../actions/CompanyAction'

export const companyState = {
    loading: false,
    companies: [],
    company: {},
    error: ''
}

const companyReducer = (state = companyState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_COMPANIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_COMPANIES_SUCCESS:
            return {
                loading: false,
                company: {},
                companies: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_COMPANY_SUCCESS:
            return {
                loading: false,
                company: action.payload,
                companies: [],
                error: ''
            }
        case ACTION_TYPES.FETCH_COMPANIES_FAILURE:
            return {
                loading: false,
                companies: [],
                company: {},
                error: action.payload
            }
        case ACTION_TYPES.ADD_COMPANY_SUCCESS:
            const added_company = state.companies.concat(action.payload);
            return {
                loading: false,
                companies: [...state.companies, added_company],
                error: ''
            }
        case ACTION_TYPES.ADD_COMPANY_FAILURE:
            return {
                loading: false,
                companies: state.companies,
                error: action.payload
            }

        case ACTION_TYPES.EDIT_COMPANY_SUCCESS:
            return {
                ...state,
                companies: state.companies.map(
                    content => content.id === action.id ? { content: action.payload } : content
                )
            }
        case ACTION_TYPES.EDIT_COMPANY_FAILURE:
            return {
                loading: false,
                companies: state.companies,
                error: action.payload
            }
        case ACTION_TYPES.DELETE_COMPANY_FAILURE:
            return {
                loading: false,
                companies: state.companies,
                error: action.payload
            }
        default:
            return state;
    }
}
 
export default companyReducer;