import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = props => {

    // WIDGETS
    const [widget, setWidget] = useState([
        {
            id: 1,
            logo: require('./assets/img/logo1.svg'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            id: 2,
            logo: require('./assets/img/logo2.svg'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            id: 3,
            logo: require('./assets/img/logo3.svg'),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
    ]);

    const provider_values = {
        widgets: [widget, setWidget]
    };

    return (
        <DataContext.Provider value={provider_values}>
            {props.children}
        </DataContext.Provider>
    );
};