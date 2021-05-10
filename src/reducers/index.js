import { combineReducers } from "redux"
import companyReducer from './data/companyReducer'
import forumReducer from "./data/forumReducer"
import newsReducer from "./data/newsReducer"
import productReducer from "./data/productReducer"
import reviewReducer from "./data/reviewsReducer"
import homeReducer from "./data/homeReducer"
import showDataReducer from "./state/showDataReducer"

const allReducers = combineReducers({
    companies: companyReducer,
    news: newsReducer,
    products: productReducer,
    reviews: reviewReducer,
    forumData: forumReducer,
    showData: showDataReducer,
    home: homeReducer
})

export default allReducers;