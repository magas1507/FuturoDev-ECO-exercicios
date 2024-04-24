import "./styles.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="container--home-page">
        <div className="container--hero">
          <img src="../public/assets/img-hero.png" alt="hero trilha" />
          <div className="container--text-hero">
            <h1>Que tal aproveitar um tempo com a natureza?</h1>
            <p>
              Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
              aventuras e inspire-se com as experiências de outros aventureiros.
              Prepare-se para explorar novos horizontes e se conectar com a
              natureza através do Adventure Trails!
            </p>
            <Link className="button-hero" to="/explorer-page">
              <button>Explorar Trilhas</button>
            </Link>
          </div>
        </div>
        <div className="container--main-text-explorer">
          <h2>Explore trilhas incríveis</h2>
          <p>
            O "Adventure Trails FD" é seu portal para explorar e compartilhar as
            melhores trilhas para trekking e ciclismo ao redor do mundo.
            Descubra rotas deslumbrantes, desde caminhos tranquilos por
            florestas exuberantes até trilhas desafiadoras em montanhas
            majestosas. Encontre informações detalhadas sobre cada trilha,
            incluindo distância, dificuldade, pontos de interesse naturais e
            dicas úteis para uma experiência eco-friendly.
          </p>
          <Link className="btn--main-explorer" to="/">
            <button>Explorar Trilhas</button>
          </Link>
        </div>
      </div>
      <div className="container--text-second">
        <div className="container--text-second-button-text">
          <h2>
            Compartilhe fotos, dicas e localização das suas trilhas favoritas
          </h2>
          <Link className="btn--text-seconde" to="/register-page">
            <button>Cadastrar nova Trilha</button>
          </Link>
        </div>
        <img src="../public/assets/img-home-1.png" alt="imagen trilhas" />
      </div>
    </div>
  );
}

export default HomePage;
