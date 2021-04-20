import { createContext, useState } from 'react'

export const DataContext = createContext();

export const DataProvider = props => {
    const provider_values = {

    };

    return (
        <DataContext.Provider value={provider_values}>
            {props.children}
        </DataContext.Provider>
    );
};