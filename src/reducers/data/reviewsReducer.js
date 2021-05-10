export const reviewState = {
    reviews: [
        {
            id: 1,
            username: "Mr. Vadim Tumarkin1"
        },
        {
            id: 2,
            username: "Mr. Vadim Tumarkin2"
        },
        {
            id: 3,
            username: "Mr. Vadim Tumarkin3"
        },
        {
            id: 4,
            username: "Mr. Vadim Tumarkin4"
        },
        {
            id: 5,
            username: "Mr. Vadim Tumarkin5"
        },
        {
            id: 6,
            username: "Mr. Vadim Tumarkin6"
        },
        {
            id: 7,
            username: "Mr. Vadim Tumarkin7"
        }
    ]
}

const reviewReducer = (state = reviewState) => {
    return state;
}

export default reviewReducer;