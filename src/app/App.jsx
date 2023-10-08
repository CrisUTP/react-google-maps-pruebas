import { Marker } from "@react-google-maps/api";

import { markersDefault } from "./config/markersDefault";
import MapGoogle from "./components/MapGoogle";
import DirectionsRendererComponent from "./components/DirectionComponent";

const App = () => {

  return (
    <>
      <header>
        <h1>Google Maps React</h1>
      </header>
      <main className="container mx-auto pt-5">
          <div className="h-[600px] w-full">
            <MapGoogle>
              {markersDefault.map((marker, index) => (
                <Marker key={index} {...marker} />
              ))}
              <DirectionsRendererComponent origin={markersDefault[1].position} destination={markersDefault[3].position} />
            </MapGoogle>
          </div>
      </main>
    </>
  );
};

export default App;
