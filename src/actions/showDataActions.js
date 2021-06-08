export const setHomepage = id => {
    return {
        type: 'SET_HOMEPAGE',
        payload: id
    };
}

export const loadWidgets = (value, length) => {
    return {
        type: 'LOAD_WIDGETS',
        payload: value,
        length: length
    };
}

export const loadReviews = (value, length) => {
    return {
        type: 'LOAD_REVIEWS',
        payload: value,
        length: length
    };
}

export const loadProducts = (value, length) => {
    return {
        type: 'LOAD_PRODUCTS',
        payload: value,
        length: length
    };
}

export const loadNews = value => {
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
