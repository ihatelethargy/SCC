import { createContext, useState } from 'react';

const SccContext = createContext();

const SccContextProvider = ({ children }) => {
  const [eduflag, setEduflag] = useState(false);
  const [prac, setPrac] = useState('test');

  return (
    <SccContext.Provider
      value={{
        eduflag,
        setEduflag,
        prac,
        setPrac,
      }}
    >
      {children}
    </SccContext.Provider>
  );
};

export { SccContextProvider, SccContext };
