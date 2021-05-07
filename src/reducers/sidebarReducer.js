const sidebarReducer = (state = false, action) => {
    if (action.type = 'TOGGLE_MENU') {
        return !state
    }
}

export default sidebarReducer;