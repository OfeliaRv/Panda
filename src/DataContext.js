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
            name: 'Companies',
            icon: null
        },
        {
            id: 3,
            name: 'Reviews',
            icon: null
        },
        {
            id: 4,
            name: 'Products',
            icon: null
        }
    ]);

    const [currentUser, setCurrentUser] = useState(null);
    const [isActive, setActive] = useState(false);

    const provider_values = {
        sideNavbar: [sideNavbar, setsideNavbar],
        currentUser: [currentUser, setCurrentUser],
        isActive: [isActive, setActive]
    };

    return (
        <DataContext.Provider value={provider_values}>
            {props.children}
        </DataContext.Provider>
    );
};