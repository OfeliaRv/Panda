const initialState = {
    sidebarItems: [{
        id: 1,
        name: 'News',
        icon: null
    },
    {
        id: 2,
        name: 'Companies',
        icon: null
    },
    {
        id: 3,
        name: 'Reviews',
        icon: null
    },
    {
        id: 4,
        name: 'Products',
        icon: null
    }]
}

const dataReducer = (state = initialState, action) => {
    return state;
}

export default dataReducer;