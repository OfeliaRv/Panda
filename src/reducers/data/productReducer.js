import product1 from '../../assets/img/product1.png'

export const productState = {
    products: [
        {
            id: 0,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 1,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 2,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 3,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 4,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 5,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 6,
            name: "Flight Procedures Design System 2",
            img: product1
        },
        {
            id: 7,
            name: "Flight Procedures Design System 2",
            img: product1
        },
        {
            id: 8,
            name: "Flight Procedures Design System",
            img: product1
        }
    ]
}

const productReducer = (state = productState) => {
    return state;
}

export default productReducer;