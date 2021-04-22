import { createContext, useState } from 'react'

export const DataContext = createContext();

export const DataProvider = props => {
    const [sideNavbar, setsideNavbar] = useState([
        {
            id: 1,
            name: 'News',
            icon: null
        },
        {
            id: 2,
            name: 'Companies / Customers',
            icon: null
        },
        {
            id: 3,
            name: 'Products',
            icon: null
        }
    ])


    const provider_values = {
        sideNavbar: [sideNavbar, setsideNavbar]
    };

    return (
        <DataContext.Provider value={provider_values}>
            {props.children}
        </DataContext.Provider>
    );
};