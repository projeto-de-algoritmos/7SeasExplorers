import { useState } from "react";
import map from "../assets/mapa.png";
import { mapGraph } from "../utils/mapGraph";
import { MapMark } from "./MapMark";

export function Map() {
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();

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
  };

  const setColorToSelectedPoints = (item) => {
    if (item === departure) return "bg-green-500";
    if (item === arrival) return "bg-red-500";
  };

  return (
    <div className="w-full h-screen relative flex border border-black">
      {Object.keys(mapGraph).map((item, index) => (
        <MapMark key={index} mapGraph={mapGraph} item={item} handleWithUserSelection={handleWithUserSelection} setColorToSelectedPoints={setColorToSelectedPoints}/>
      ))}
      <img src={map} alt="Mapa" className="relative"/>
      <button
        className="absolute p-2 bottom-0 right-1/2 bg-blue-500 m-5 text-white rounded-md hover:brightness-90 transition-all text-lg"
        onClick={() => clearSelectedCountries()}
      >
        Limpar
      </button>
    </div>
  );
}
