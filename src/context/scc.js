import {createContext, useState} from 'react';


const SccContext = createContext();

const SccContextProvider = ({children}) => {
    const [eduflag,setEduflag] = useState(false);

    return <SccContext.Provider
        value={{
            eduflag,
            setEduflag
        }}
        >
            {children}
        </SccContext.Provider>
}

export {SccContextProvider,SccContext};