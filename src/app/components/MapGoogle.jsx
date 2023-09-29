import { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import { API_KEY_GOOGLE_MAPS } from "../config/env";
import IsLoading from "./IsLoading";

/**
 * @param {Object} params.
 * @param {ReactNode} params.children - Los elementos hijos que se renderizarán dentro del componente GoogleMap.
 * @param {Function<google.maps.Ma>} params.onLoad - Se ejecuta cuando carga el mapa, en el parametro tiene la instancia del mapa
 * @param {import('@react-google-maps/api').GoogleMapProps} params.configGoogleMap - Son las propiedades para configurar el mapa base.
 * @returns {JSX.Element} - El componente GoogleMap renderizado.
 */
const MapGoogle = ({
  children,
  configGoogleMap,
  googleMapsApiKey = API_KEY_GOOGLE_MAPS,
  onLoad = () => {},
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
  });

  const renderChildren = (map) => {
    setTimeout(() => {
      setMapLoaded(true);
      onLoad(map);
    }, 100);
  };

  return (
    <>
      <p className="font-bold text-2xl">Google Maps Components</p>
      <hr className="my-2" />
      <IsLoading isLoaded={isLoaded}>
        <GoogleMap
          options={{ disableDoubleClickZoom: true }}
          onLoad={renderChildren}
          mapContainerClassName="h-full w-full"
          center={{ lat: 19.04146906682182, lng: -98.20633679136121 }}
          zoom={12}
          {...configGoogleMap}
        >
          <IsLoading isLoaded={mapLoaded}>{children}</IsLoading>
        </GoogleMap>
      </IsLoading>
    </>
  );
};

export default MapGoogle;
