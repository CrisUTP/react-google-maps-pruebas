import { Marker, Autocomplete,} from "@react-google-maps/api";
import { useState, useContext } from "react";

import { markersDefault } from "./config/markersDefault";
import MapGoogle from "./components/MapGoogle";
import IsLoading from "./components/IsLoading";
import GeoJSON from "./components/GeoJSON";
import { GoogleMapsContext } from "./contexts/GoogleMapsContext";

const App = () => {

  const { isLoaded } = useContext(GoogleMapsContext);
  const [showGeoJSON, setShowGeoJSON] = useState(false);

  return (
    <>
      <header>
        <h1>Google Maps React</h1>
      </header>
        {/* Mapa */}
        <button onClick={ () => setShowGeoJSON(!showGeoJSON)} >Mostrar GeoJSON: {JSON.stringify(showGeoJSON)}</button>
        <main className="container mx-auto pt-5 grid grid-cols-6 gap-10">
          <section className="h-[600px] w-full col-span-6 md:col-span-4 px-5 md:px-0">
            <MapGoogle>
              {markersDefault.map(({id, markerProp}) => (
                <Marker key={id} {...markerProp} />
                ))}
                { showGeoJSON && <GeoJSON/> }
            </MapGoogle>
          </section>
          <section className="col-span-2 bg-slate-100 rounded-xl shadow-xl flex flex-col overflow-hidden p-3">
                <div className="w-full flex justify-around">
                  <p>Ingresa la ubicación: </p> 
                  <IsLoading isLoaded={isLoaded}>
                    <Autocomplete className="w-[300px]">
                      <input className="w-full" type="text" name="direccion" id="direccion" />
                    </Autocomplete>
                  </IsLoading>
                </div>
          </section>
        </main>
    </>
  );
};

export default App;
