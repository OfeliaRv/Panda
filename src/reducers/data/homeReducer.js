const initialState = {
    homepage: [
        {
            id: 0,
            clicked: true
        },
        {
            id: 1,
            clicked: false
        },
        {
            id: 2,
            clicked: false
        }
    ],
    activeHomepage: 0
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HOMEPAGE':
            let newId = action.payload;
            let visible = 0;
            for (let i = 0; i < state.homepage.length; i++) {
                state.homepage[i].clicked = false;
                if (i === newId) {
                    visible = i;
                }
            }
            state.homepage[visible].clicked = true;
            state.activeHomepage = visible;
            return state;
        default:
            return state;
    }
}

export default homeReducer;