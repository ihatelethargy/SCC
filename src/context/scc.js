import {createContext, useState} from 'react';


const SccContext = createContext();

const SccContextProvider = ({children}) => {


    return <SccContext.Provider
        value={{

        }}
        >
            {children}
        </SccContext.Provider>
}

export {SccContextProvider,SccContext};