import { DirectionsRenderer } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const DirectionsRendererComponent = ({
  origin,
  destination,
  travelMode = google.maps.TravelMode.DRIVING
}) => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    loadRoute();
  }, [origin, destination, travelMode]);

  const loadRoute = async () => {
    if(!origin || !destination) return setDirections(null);
    const directionsService = new window.google.maps.DirectionsService();
    const result = await directionsService.route({ origin, destination, travelMode });
    if(result.status !== 'OK') return alert("No se pudo generar la ruta");
    setDirections(result);
  }

  return directions ? (
    <DirectionsRenderer directions={directions} />
  ) : null;
};

export default DirectionsRendererComponent;
