import { combineReducers } from "redux"
import newsReducer from "./newsReducer";
import menuReducer from "./sideMenuReducer"
import authReducer from "./authReducer"
import toggleMenuReducer from "./toggleMenuReducer"

const allReducers = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    toggleMenu: toggleMenuReducer,
    news: newsReducer
})

export default allReducers;