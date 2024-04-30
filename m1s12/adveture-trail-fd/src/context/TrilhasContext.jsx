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
  
  function addTrail(dataTrilhas) {
    setTrilhas(trilhas => [...trilhas, dataTrilhas])
  }
  return (
    <TrilhasContext.Provider value={{trilhas, setTrilhas, addTrail}}>
      {children}
    </TrilhasContext.Provider>
  );
}


