# Componente MapGoogle
[Inicio](../../README.md)

El componente `MapGoogle` utiliza el componente de la biblioteca `@react-google-maps/api` para renderizar un mapa de Google con una manera simplificada de configurar sus diferentes parametros.

Para funcionar obligatoriamente debe estar dentro del componente [GoogleMapProvider](../contexts/ContextGoogleMaps.md).

## Props

El componente `MapGoogle` acepta las siguientes propiedades:

- `children` (opcional): Los elementos hijos que se renderizarán dentro del componente `GoogleMap`. Esto permite agregar marcadores, polígonos, u otros elementos al mapa.

- `configGoogleMap` (opcional): Un objeto que contiene las propiedades para configurar el mapa base. Debes proporcionar las propiedades requeridas por la API de Google Maps para personalizar el mapa según tus necesidades.
    El componte asigna unos valores por defecto, pero tienes la libertad de modificarlos según tus necesidades.
    ```javascript
    configGoogleMap={{
        // Propiedades de configuración del mapa, por defecto:
        options={{ 
            disableDoubleClickZoom: true ,
        }}
        center={{ lat: 19.04146906682182, lng: -98.20633679136121 }}
        zoom={12}
    }}
    ```

## Uso

Puedes utilizar el componente `MapGoogle` de la siguiente manera en tu aplicación React:

```javascript
import React from 'react';
import MapGoogle from './MapGoogle';

function App() {
  return (
    <div className="App">
      <MapGoogle
        configGoogleMap={{
          // Propiedades de configuración del mapa, por ejemplo:
          zoom: 12,
          center: { lat: 19.04146906682182, lng: -98.20633679136121 },
        }}
      >
        {/* Elementos hijos que se renderizarán en el mapa, como marcadores, rutas, etc. */}
        {/* <Marker position={{ lat: 19.04146906682182, lng: -98.20633679136121 }} /> */}
      </MapGoogle>
    </div>
  );
}

export default App;
