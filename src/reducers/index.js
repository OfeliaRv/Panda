import { combineReducers } from "redux"
import customerReducer from './data/customerReducer'
import forumReducer from "./data/forumReducer"
import newsReducer from "./data/newsReducer"
import productReducer from "./data/productReducer"
import reviewReducer from "./data/reviewsReducer"
import homeReducer from "./data/homeReducer"
import showDataReducer from "./state/showDataReducer"
import messageReducer from "./data/messageReducer"

const allReducers = combineReducers({
    customers: customerReducer,
    news: newsReducer,
    products: productReducer,
    reviews: reviewReducer,
    forumData: forumReducer,
    showData: showDataReducer,
    messages: messageReducer,
    home: homeReducer
})

export default allReducers;