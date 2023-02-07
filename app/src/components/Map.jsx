import { useEffect, useState } from "react";
import Xarrow from "react-xarrows";
import map from "../assets/mapa.png";
import { bellmanFord } from "../utils/bellmanFord";
import { mapGraph } from "../utils/mapGraph";
import { MapMark } from "./MapMark";

export function Map() {
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();
  const [bellmanFordResult, setBellmanFordResult] = useState();
  const [generatedPath, setGeneratedPath] = useState();

  const handleWithUserSelection = (item) => {
    if (departure) {
      setArrival(item);
    } else {
      setDeparture(item);
    }
  };

  const clearSelectedCountries = () => {
    setDeparture();
    setArrival();
    setGeneratedPath();
    setBellmanFordResult();
  };

  const setColorToSelectedPoints = (item) => {
    if (item === departure) return "bg-green-500";
    if (item === arrival) return "bg-red-500";
    return "bg-[#34495d]";
  };

  useEffect(() => {
    const path = [];

    const bellmanFordResultPath = bellmanFordResult?.path;

    for (let i = 0; i < bellmanFordResultPath?.length; i++) {
      if (bellmanFordResultPath[i + 1] === undefined) break;
      path.push({
        start: bellmanFordResultPath[i],
        end: bellmanFordResultPath[i + 1],
        animateDrawing: 1,
      });
    }

    setGeneratedPath(path);
  }, [bellmanFordResult]);

  console.log(bellmanFordResult);

  return (
    <div className="w-full h-screen relative flex justify-center bg-[#6B8BBC]">
      {bellmanFordResult && (
        <div className="absolute z-10 mt-10 p-2 bg-[#34495d] text-white rounded-md">
          Essa é a viagem com menor custo: {bellmanFordResult.finalCost} moedas
        </div>
      )}
      {Object.keys(mapGraph).map((item, index) => (
        <MapMark
          key={index}
          mapGraph={mapGraph}
          item={item}
          handleWithUserSelection={handleWithUserSelection}
          setColorToSelectedPoints={setColorToSelectedPoints}
        />
      ))}
      {generatedPath &&
        generatedPath.map((line, index) => (
          <Xarrow
            key={index}
            curveness={0.1}
            strokeWidth={3}
            color="yellow"
            zIndex={10}
            {...line}
          />
        ))}
      <img src={map} alt="Mapa" className="relative" />
      <div className="absolute bottom-0 left-[50%] flex space-x-2 mb-5">
        <button
          className=" p-2 bg-blue-500 text-white rounded-md hover:brightness-90 transition-all text-lg"
          onClick={() => clearSelectedCountries()}
        >
          Limpar
        </button>
        <button
          className=" p-2 bg-green-500 text-white rounded-md hover:brightness-90 transition-all text-lg"
          onClick={() => setBellmanFordResult(bellmanFord(departure, arrival))}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
