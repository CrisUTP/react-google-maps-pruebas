import { useLoadScript } from "@react-google-maps/api";
import { createContext, useState } from "react";

import { API_KEY_GOOGLE_MAPS } from "../config/env";

export const GoogleMapsContext = createContext();

const GoogleMapProvider = ({
    children,
    googleMapsApiKey = API_KEY_GOOGLE_MAPS,
}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey,
        libraries:[["places"]]
    });
    const [ map, setMap ] = useState(null);
    return (
        <GoogleMapsContext.Provider value={{
            isLoaded, map, setMap
        }}>
            { children }
        </GoogleMapsContext.Provider>
    )
}

export default GoogleMapProvider;

