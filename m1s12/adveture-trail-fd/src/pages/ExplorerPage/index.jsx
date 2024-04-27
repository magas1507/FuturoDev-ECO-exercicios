import "./styles.css";

import CardTrilha from "../../components/CardTrilha/index.jsx";
import useFetch from "../../hooks/useFetch.jsx";

function ExplorerPage() {
  const [data, loading] = useFetch("public/data/data.json");
  return(
    <>  
      <div className="container--explorer">
        <div className="container--hero-explorer">
          <img  src="../public/assets/img-hero.png" alt="hero trilhas" />
        </div>
        
        <h1>Explorar Trilhas</h1>
        
        {!loading && data && (
          <>
            {data.map((trilhas, index) => (
              <CardTrilha dadosTrilha={trilhas} key={index} />
            ))}
          </>
        )}
      </div>
    </>
  )
}                      

export default ExplorerPage;