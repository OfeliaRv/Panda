import { companyState } from '../data/companyReducer'
import { productState } from '../data/productReducer'
import { newsState } from '../data/newsReducer'
import { reviewState } from '../data/reviewsReducer'

const loadData = {
    loadNews:
    {
        first: 0,
        last: 5
    },
    loadProducts:
    {
        first: 0,
        last: 6
    },
    loadWidgets: {
        first: 0,
        last: 3
    },
    loadReviews: {
        first: 0,
        last: 3
    },
    showNews: 0,
    showPage: 0
}

const showDataReducer = (state = loadData, action) => {
    switch (action.type) {
        case 'LOAD_WIDGETS':
            if (state.loadWidgets.last < companyState.companies.length) {
                state.loadWidgets.first = state.loadWidgets.first + action.payload
                state.loadWidgets.last = state.loadWidgets.last + action.payload
            }
            else {
                state.loadWidgets.first = 0
                state.loadWidgets.last = 3
            }
            return state;

        case 'LOAD_REVIEWS':
            if (state.loadReviews.last < reviewState.reviews.length) {
                state.loadReviews.first = state.loadReviews.first + action.payload
                state.loadReviews.last = state.loadReviews.last + action.payload
            }
            else {
                state.loadReviews.first = 0
                state.loadReviews.last = 3
            }

            return state;

        case 'LOAD_NEWS':
            if (state.loadNews.last < newsState.news.length) {
                state.loadNews.first = state.loadNews.first + action.payload
                state.loadNews.last = state.loadNews.last + action.payload
            }
            else {
                state.loadNews.first = 0
                state.loadNews.last = 5
            }

            return state;

        case 'LOAD_PRODUCTS':
            if (state.loadProducts.last < productState.products.length) {
                state.loadProducts.first = state.loadProducts.first + action.payload
                state.loadProducts.last = state.loadProducts.last + action.payload
            }
            else {
                state.loadProducts.first = 0
                state.loadProducts.last = 6
            }
            return state;

        case 'SHOW_NEWS':
            state.showNews = action.payload
            return state;

        case 'SHOW_PAGE':
            state.showPage = action.payload
            return state;

        default:
            return state;
    }
}

export default showDataReducer;