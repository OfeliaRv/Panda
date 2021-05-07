import { combineReducers } from "redux"
import dataReducer from "./dataReducer"
import sidebarReducer from "./sidebarReducer"

const allReducers = combineReducers({
    data: dataReducer,
    sidebar: sidebarReducer
})

export default allReducers;