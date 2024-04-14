import "./App.css";
import CardTrilha from "./components/CardTrilha/index.jsx";
import useFetch from "./hooks/useFetch.jsx";

function App() {
  const [data, loading] = useFetch("public/data/data.json");

  return (
    <>
      {loading && <h4>Carregando trilhas</h4>}
      {!loading && data && (
        <>
          {data.map((trilhas, index) => (
            <CardTrilha dadosTrilha={trilhas} key={index} />
          ))}
        </>
      )}
    </>
  );
}

export default App;
