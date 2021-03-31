import { createContext, useState } from 'react'
import c_logo1 from './assets/img/logo1.svg'
import c_logo2 from './assets/img/logo2.svg'
import c_logo3 from './assets/img/logo3.svg'

export const DataContext = createContext();

export const DataProvider = props => {

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

    const provider_values = {
        widgets: [widget, setWidget]
    };

    return (
        <DataContext.Provider value={provider_values}>
            {props.children}
        </DataContext.Provider>
    );
};