import { combineReducers } from "redux"
import menuReducer from "./sideMenuReducer"
import toggleMenuReducer from "./toggleMenuReducer"

const allReducers = combineReducers({
    menu: menuReducer,
    toggleMenu: toggleMenuReducer
})

export default allReducers;