import { useState } from "react";
import { Map } from "./components/Map";
import Boat from "./assets/barco.png";

function App() {
  const [renderMap, setRenderMap] = useState(false);
  return renderMap ? (
    <Map />
  ) : (
    <div className="w-screen h-screen bg-[#34495d] flex items-center justify-center flex-col">
      <h1 className="text-white font-bold text-5xl">Seas Explorer</h1>
      <div className="flex items-center">
        <img src={Boat} alt="Barco" className="max-w-lg w-full" />
        <p className="w-64 text-2xl text-white font-medium">
          Selecione o seu ponto de partida e seu destino final, capitão! Nós
          selecionaremos qual o melhor caminho a seguir! Cuidado com o alto mar
        </p>
      </div>
      <button
        className="text-white px-3 py-2 font-medium text-2xl rounded-md hover:brightness-90 transition-all bg-[#425e77]"
        onClick={() => setRenderMap(true)}
      >
        Continuar
      </button>
    </div>
  );
}

export default App;
