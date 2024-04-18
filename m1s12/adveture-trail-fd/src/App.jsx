import "./App.css";
import CardTrilha from "./components/CardTrilha/index.jsx";
import useFetch from "./hooks/useFetch.jsx";
import Header from "./components/Header/index.jsx";

import { Outlet } from 'react-router-dom';

function App() {
  const [data, loading] = useFetch("public/data/data.json");

  return (
    <>
      <Header />
      <Outlet />
      
      {loading && <h4>Carregando trilhas</h4>}
      {!loading && data && (
        <>
          <div className="container">
            {data.map((trilhas, index) => (
              <CardTrilha dadosTrilha={trilhas} key={index} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
