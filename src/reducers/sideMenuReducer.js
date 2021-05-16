import requests_icon from '../assets/img/choose.svg'
import news_icon from '../assets/img/news.svg'
import companies_icon from '../assets/img/companies.svg'
import messages_icon from '../assets/img/messages.svg'
import products_icon from '../assets/img/products.svg'
import reviews_icon from '../assets/img/review.svg'

const initialState = {
    menuItems: [
        {
            id: 1,
            link: 'news',
            name: 'News',
            icon: news_icon
        },
        {
            id: 2,
            link: 'companies',
            name: 'Companies',
            icon: companies_icon
        },
        {
            id: 3,
            link: 'reviews',
            name: 'Reviews',
            icon: reviews_icon
        },
        {
            id: 4,
            link: 'products',
            name: 'Products',
            icon: products_icon
        },
        {
            id: 5,
            link: 'messages',
            name: 'Messages',
            icon: messages_icon
        },
        {
            id: 6,
            link: 'requests',
            name: 'Registration Requests',
            icon: requests_icon
        }
    ]
}

const menuReducer = (state = initialState, action) => {
    return state;
}

export default menuReducer;