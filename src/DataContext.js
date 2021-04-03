import { createContext, useState } from 'react'
import c_logo1 from './assets/img/logo1.svg'
import c_logo2 from './assets/img/logo2.svg'
import c_logo3 from './assets/img/logo3.svg'
import left_home from './assets/img/left-item-home.svg'
import left_products from './assets/img/left-item-products.svg'

export const DataContext = createContext();

export const DataProvider = props => {

    // LEFT PAGE NAME
    const [leftName, setLeftName] = useState([
        {
            id: 1,
            item: left_home,
            name: "Home"
        },
        {
            id: 2,
            item: left_products,
            name: "Products"
        }
    ]);

    // WIDGETS
    const [widget, setWidget] = useState([
        {
            id: 1,
            logo: c_logo1,
            text: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 2,
            logo: c_logo2,
            text: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 3,
            logo: c_logo3,
            text: "Lorem ipsum dolor sit amet, consectetur"
        }
    ]);

    // PRODUCTS
    const [product, setProduct] = useState([
        {
            id: 1,
            name: "Flight Procedures Design System"
        },
        {
            id: 2,
            name: "Flight Procedures Design System"
        },
        {
            id: 3,
            name: "Flight Procedures Design System"
        },
        {
            id: 4,
            name: "Flight Procedures Design System"
        },
        {
            id: 5,
            name: "Flight Procedures Design System"
        },
        {
            id: 6,
            name: "Flight Procedures Design System"
        },
    ])

    const provider_values = {
        widgetData: [widget, setWidget],
        productData: [product, setProduct],
        leftNameData: [leftName, setLeftName]
    };

    return (
        <DataContext.Provider value={provider_values}>
            {props.children}
        </DataContext.Provider>
    );
};