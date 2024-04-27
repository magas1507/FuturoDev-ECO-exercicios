import "./App.css";
//import CardTrilha from "./components/CardTrilha/index.jsx";
import useFetch from "./hooks/useFetch.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { Outlet } from 'react-router-dom';

function App() {
  const [data, loading] = useFetch("public/data/data.json");

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
