import { createContext, useEffect, useState } from "react";


import useFetch from '../hooks/useFetch'

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
  const [data] = useFetch("data/data.json");
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    if (!!data ) {
      setTrilhas(data)      
    }
  }, [data])
  
  return (
    <TrilhasContext.Provider value={{trilhas, setTrilhas}}>
      {children}
    </TrilhasContext.Provider>
  );
}


