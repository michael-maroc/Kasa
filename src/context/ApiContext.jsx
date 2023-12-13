import { useState, createContext } from 'react';

export const Context = createContext();

function ApiContext({ children }) {
  const [accommodationList, setaccommodationList] = useState([]);

  return (
    <Context.Provider value={[accommodationList, setaccommodationList]}>
      {children}
    </Context.Provider>
  );
}

export default ApiContext;
