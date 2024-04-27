import * as PropTypes from "prop-types";
import "./styles.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <>
      <div className="card_container">
        <div className="card_colum1">
          <img
            className="card_imagem"
            width={200}
            src={dadosTrilha.urlImagem}
            alt="imagem trilha"
          />
        </div>
        <div className="card_colum2">
          <div className="card-colum2--head">
            <h1>
              {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} /{" "}
              {dadosTrilha.estado}
            </h1>
            <img src="../public/assets/heart-icon.png" alt="" />
          </div>
          <hr />
          <h3 className="card-colum2--by">Por: {dadosTrilha.nomeUsuario}</h3>
          <div className="card-colum2--main">
            <h5>Duração: {dadosTrilha.duracao}</h5>
            <h5>Trajeto: {dadosTrilha.trajeto}</h5>
            <div className="card-trilha"></div>
          </div>
          <span>{dadosTrilha.dificuldade}!</span>
          <div className="rating">
            <img src="../public/assets/rating-2.png" alt="" />
            <a href="#">Avalliações</a>
          </div>
        </div>
      </div>
    </>
  );
}

// configuração das props types
CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(["caminhada / trekking", "ciclismo"]),
    nomeUsuario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired,
  }),
};

export default CardTrilha;
