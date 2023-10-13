import { Marker, Autocomplete } from "@react-google-maps/api";
import { useState, useContext, useRef } from "react";

import { markersDefault } from "./config/markersDefault";
import MapGoogle from "./components/MapGoogle";
import DirectionsRendererComponent from "./components/DirectionComponent";
import IsLoading from "./components/IsLoading";
import { GoogleMapsContext } from "./contexts/GoogleMapsContext";

const App = () => {

  const { isLoaded } = useContext(GoogleMapsContext);
  const [locationInput, setLocationInput] = useState({origen: '', destino: ''});
  const [locationRoute, setLocationRoute] = useState({origen: null, destino: null});
  const txtOrigen = useRef();
  const txtDestino = useRef();
  const onChangeInput = (e) => setLocationInput({...locationInput, [e.target.name]:e.target.value});
  const handleSearch = () => setLocationRoute(locationInput);

  return (
    <>
      <header>
        <h1>Google Maps React</h1>
      </header>
      <main className="flex flex-col">
        {/* Buscador */}
        <section className="w-full max-w-6xl mx-auto h-[50px] mt-4 flex justify-center items-center">
          <IsLoading isLoaded={isLoaded}>
            <Autocomplete onPlaceChanged={() => setLocationInput({destino: txtDestino.current.value, origen: txtOrigen.current.value})} className="w-1/3 py-2 px-2 mx-3 rounded-full ring">
              <input ref={txtOrigen} name="origen" placeholder="Origen" onChange={onChangeInput} className="h-full w-full focus:outline-none" />
            </Autocomplete>
          </IsLoading>
          <svg className="w-9 h-9 stroke-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <IsLoading isLoaded={isLoaded}>
          <Autocomplete onPlaceChanged={() => setLocationInput({origen: txtOrigen.current.value, destino: txtDestino.current.value})} className="w-1/3 py-2 px-2 mx-3 rounded-full ring">
            <input ref={txtDestino} name="destino" placeholder="Destino" onChange={onChangeInput} className="h-full w-full focus:outline-none" />
            </Autocomplete>
          </IsLoading>
          <button onClick={handleSearch} disabled={!locationInput.origen.trim() || !locationInput.destino.trim()} className="disabled:border-slate-500 disabled:hover:bg-white hover:bg-blue-600 active:bg-blue-700 group border-blue-500 border-2 rounded-full p-2">
            <svg className="w-5 h-5 group-disabled:stroke-slate-500  stroke-blue-500 stroke-[3] group-hover:stroke-white group-active:stroke-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </section>

        {/* Mapa */}
        <section className="container mx-auto pt-5 grid grid-cols-6 gap-10">
          <section className="h-[600px] w-full col-span-6 md:col-span-6 px-5 md:px-0">
            <MapGoogle>
              {markersDefault.map(({id, markerProp}) => (
                <Marker key={id} {...markerProp} />
              ))}
              <DirectionsRendererComponent origin={locationRoute.origen} destination={locationRoute.destino} />
            </MapGoogle>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
