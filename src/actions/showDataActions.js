export const setHomepage = id => {
    return {
        type: 'SET_HOMEPAGE',
        payload: id
    };
}

export const loadWidgets = value => {
    return {
        type: 'LOAD_WIDGETS',
        payload: value
    };
}

export const loadReviews = value => {
    return {
        type: 'LOAD_REVIEWS',
        payload: value
    };
}

export const loadProducts = value => {
    return {
        type: 'LOAD_PRODUCTS',
        payload: value
    };
}

export const loadNews = (value) => {
    return {
        type: 'LOAD_NEWS',
        payload: value,
        // length: length
    };
};

export const showNews = id => {
    return {
        type: 'SHOW_NEWS',
        payload: id
    }
}

export const showPage = id => {
    return {
        type: 'SHOW_PAGE',
        payload: id
    }
}
