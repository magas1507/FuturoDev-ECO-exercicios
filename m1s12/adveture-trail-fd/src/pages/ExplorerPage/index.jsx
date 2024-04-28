import "./styles.css";

import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";

import CardTrilha from "../../components/CardTrilha/";

function ExplorerPage() {
  console.log(TrilhasContext)
  const  { trilhas }   = useContext(TrilhasContext);

  console.log("explorer data", trilhas);
  return (
    <>
      <div className="container--explorer">
        <div className="container--hero-explorer">
          <img src="../public/assets/img-hero.png" alt="hero trilhas" />
        </div>

        <h1>Explorar Trilhas</h1>

        {trilhas &&
          trilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index} />
          ))}
      </div>
    </>
  );
}

export default ExplorerPage;
