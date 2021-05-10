export const forumState = {
    forumData: [
        {
            id: 1,
            rating: 21,
            status: "positive",
            replies: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        },
        {
            id: 2,
            rating: 5,
            status: "negative",
            replies: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        }
    ]
}

const forumReducer = (state = forumState) => {
    return state;
}

export default forumReducer;