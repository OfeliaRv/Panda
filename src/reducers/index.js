import { combineReducers } from "redux"
import newsReducer from "./newsReducer";
import menuReducer from "./sideMenuReducer"
import authReducer from "./authReducer"
import toggleMenuReducer from "./toggleMenuReducer"
import companyReducer from "./companyReducer"
import reviewReducer from "./reviewReducer"
import productReducer from "./productReducer"

const allReducers = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    toggleMenu: toggleMenuReducer,
    news: newsReducer,
    companies: companyReducer,
    reviews: reviewReducer, 
    products: productReducer
})

export default allReducers;