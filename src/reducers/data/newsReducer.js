// import news1 from '../../assets/img/news1.png'
// import news2 from '../../assets/img/news2.png'
// import news3 from '../../assets/img/news3.png'
// import news4 from '../../assets/img/news4.png'
// import news5 from '../../assets/img/news5.png'

import { ACTION_TYPES } from '../../actions/newsAction'

export const newsState = {
    loading: false,
    news: [],
    error: ''
    // news: [
    //     {
    //         id: 0,
    //         title: "News Title 1",
    //         photo: news1,
    //         date: null,
    //     },
    //     {
    //         id: 1,
    //         title: "News Title 2",
    //         photo: news2,
    //         date: null,
    //     },
    //     {
    //         id: 2,
    //         title: "News Title 3",
    //         photo: news3,
    //         date: null,
    //     },
    //     {
    //         id: 3,
    //         title: "News Title 4",
    //         photo: news4,
    //         date: null,
    //     },
    //     {
    //         id: 4,
    //         title: "News Title 5",
    //         photo: news5,
    //         date: null,
    //     },
    //     {
    //         id: 5,
    //         title: "News Title 6",
    //         photo: news1,
    //         date: null,
    //     },
    //     {
    //         id: 6,
    //         title: "News Title 7",
    //         photo: news2,
    //         date: null,
    //     },
    //     {
    //         id: 7,
    //         title: "News Title 8",
    //         photo: news3,
    //         date: null,
    //     }
    // ]
}

const newsReducer = (state = newsState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_NEWS_SUCCESS:
            console.log("im in reducer");
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: ''
            }
        case ACTION_TYPES.FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                news: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default newsReducer;