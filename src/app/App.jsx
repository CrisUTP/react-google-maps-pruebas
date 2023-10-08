import { Marker } from "@react-google-maps/api";

import { markersDefault } from "./config/markersDefault";
import MapGoogle from "./components/MapGoogle";
import DirectionsRendererComponent from "./components/DirectionComponent";
import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const App = () => {

  const [locationRoute, setLocationRoute] = useState({origin: null, destination: null})

  const handleSelectLocacion = (type, marker) => {
    setLocationRoute({...locationRoute, [type]: marker});
  }

  return (
    <>
      <header>
        <h1>Google Maps React</h1>
      </header>
      <main className="container mx-auto pt-5 grid grid-cols-6 gap-10">
        <section className="h-[600px] w-full col-span-6 md:col-span-4 px-5 md:px-0">
          <MapGoogle>
            {markersDefault.map(({id, markerProp}) => (
              <Marker key={id} {...markerProp} />
            ))}
            {/* <DirectionsRendererComponent origin={markersDefault[1].position} destination={markersDefault[3].position} /> */}
            <DirectionsRendererComponent
              origin={locationRoute.origin?.markerProp?.position}
              destination={locationRoute.destination?.markerProp?.position}
            />
          </MapGoogle>
        </section>

        {/* Lista de Ubicaciones */}
        <section className="mt-5 md:mt-0 w-full col-span-6 md:col-span-2 flex justify-center flex-col h-full px-5 md:px-0">
          <article className="relative">
            <button className="btn-primary absolute right-0 -top-2 active:-top-1 transition-all" onClick={ () => setLocationRoute({origin: null, destination: null}) } >Borrar Ruta</button>

            <h2 className="font-bold text-2xl">Origen</h2>
            <hr className="my-2" />
            <ul>
              {markersDefault.map((marker) => (
                <li
                  key={`o_${marker.id}`}
                  onClick={() => handleSelectLocacion("origin", marker)}
                  className={`item-list-locations ${marker.id == locationRoute.origin?.id ? 'item-list-locations-active' : '' }`}
                >
                  {marker.markerProp.title}
                </li>
              ))}
            </ul>
          </article>
          <article className="mt-10">
            <h2 className="font-bold text-2xl">Destino</h2>
            <hr className="my-2" />
            <ul>
              {markersDefault.map((marker) => (
                <li
                  key={`d_${marker.id}`}
                  onClick={() => handleSelectLocacion("destination", marker)}
                  className={`item-list-locations ${marker.id == locationRoute.destination?.id ? 'item-list-locations-active' : '' }`}
                >
                  {marker.markerProp.title}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default App;
