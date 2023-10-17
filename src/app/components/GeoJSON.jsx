import { useGoogleMap } from "@react-google-maps/api";
import { useEffect } from "react";


const GeoJSON = () => {
    const map = useGoogleMap();
    useEffect(() => {
      loadGeoJSON();
      return () => {
        borrarGeoJSON();
      }
    }, []);
    const loadGeoJSON = async () => {
      const data = await fetch('/public/municipios_puebla.geojson');
      const geoJSON = await data.json();
      map.data.addGeoJson(geoJSON);
    }
    const borrarGeoJSON = () => {
      map.data.forEach(feature => {
        map.data.remove(feature);
      });
    }

  return <></>;
}

export default GeoJSON;