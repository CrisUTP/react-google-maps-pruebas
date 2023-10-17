import { GoogleMap } from "@react-google-maps/api";
import { useState, useContext } from "react";

import { GoogleMapsContext } from "../contexts/GoogleMapsContext";
import IsLoading from "./IsLoading";

/**
 * @param {Object} params
 * @param {ReactNode} params.children - Los elementos hijos que se renderizarán dentro del componente GoogleMap.
 * @param {import('@react-google-maps/api').GoogleMapProps} params.configGoogleMap - Son las propiedades para configurar el mapa base.
 * @returns {JSX.Element} - El componente GoogleMap renderizado.
 */
const MapGoogle = ({
  children,
  configGoogleMap,
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const { isLoaded, setMap } = useContext(GoogleMapsContext);

  const renderChildren = (map) => {
    setTimeout(() => {
      setMapLoaded(true);
      setMap(map);
    }, 100);
  };

  return (
    <IsLoading isLoaded={isLoaded}>
      <GoogleMap
        options={{ 
          disableDoubleClickZoom: true ,
        }}
        onLoad={renderChildren}
        mapContainerClassName="h-full w-full"
        center={{ lat: 19.04146906682182, lng: -98.20633679136121 }}
        zoom={12}
        {...configGoogleMap}
      >
        <IsLoading isLoaded={mapLoaded}>{children}</IsLoading>
      </GoogleMap>
    </IsLoading>
  );
};

export default MapGoogle;
