const loadData = {
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
    showPage: 0, 
    carousel: 0
}

const showDataReducer = (state = loadData, action) => {
    switch (action.type) {
        case 'LOAD_WIDGETS':
            if (state.loadWidgets.last < action.length) {
                state.loadWidgets.first = state.loadWidgets.first + action.payload
                state.loadWidgets.last = state.loadWidgets.last + action.payload
                console.log(state.loadWidgets.last);
            }
            else {
                state.loadWidgets.first = 0
                state.loadWidgets.last = 3
            }
            return state;

        case 'LOAD_REVIEWS':
            if (state.loadReviews.last < action.length) {
                state.loadReviews.first = state.loadReviews.first + action.payload
                state.loadReviews.last = state.loadReviews.last + action.payload
            }
            else {
                state.loadReviews.first = 0
                state.loadReviews.last = 3
            }

            return state;

        case 'LOAD_NEWS':
            // if (state.carousel < (action.length - 1 ) * 93.3) {  
                var coef = action.payload;
                state.carousel = coef  * 93.3;
            // }
            // else {
                // state.carousel = 0
            // }

            return state;

        case 'LOAD_PRODUCTS':
            if (state.loadProducts.last < action.length) {
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