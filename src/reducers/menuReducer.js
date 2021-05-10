const initialState = {
    menuItems: [
        {
            id: 1,
            link: 'news',
            name: 'News',
            icon: null
        },
        {
            id: 2,
            link: 'companies',
            name: 'Companies',
            icon: null
        },
        {
            id: 3,
            link: 'reviews',
            name: 'Reviews',
            icon: null
        },
        {
            id: 4,
            link: 'products',
            name: 'Products',
            icon: null
        },
        {
            id: 5,
            link: 'messages',
            name: 'Messages',
            icon: null
        },
        {
            id: 6,
            link: 'requests',
            name: 'Registration Requests',
            icon: null
        }
    ]
}

const menuReducer = (state = initialState, action) => {
    return state;
}

export default menuReducer;