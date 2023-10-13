# GoogleMapProvider y ContextGoogleMaps

[Inicio](../../README.md)

## ContextGoogleMaps
Este context se utiliza para poder acceder a las propiedades y métodos del componente GoogleMapProvider.

## GoogleMapProvider
Este componente se encarga de cargar el script de Google Maps para que despues en cualquier sitio de tu aplicación puedas utilizar los servicios de Google Maps.


## Propiedades y métodos

- `googleMapsApiKey`: Es la API_KEY de Google Maps que se utilizará para cargar el script de Google Maps.
- `isLoaded`: Es un booleano que indica si el script de Google Maps se ha cargado correctamente.
- `map`: Es la variable donde podras acceder a las instancias de Map creadas en tu aplicación.
- `setMap`: Es la función para establecer la instacia del Map, no es recomendable interactuar directamente con ella, el componente *MapGoogle* lo hace en automatico.

## Uso del Provider

1. Importa el componente `GoogleMapProvider` desde el archivo `GoogleMapsContext.jsx`.
2. Envuelve el componente principal de la aplicación con el componente `GoogleMapProvider`, pasando la clave de API de Google Maps como una propiedad.
3. Utiliza el contexto `GoogleMapsContext` en cualquier componente que necesite acceder al objeto del mapa de Google Maps.

```javascript
import GoogleMapProvider from "./GoogleMapsContext";

function App() {
  return (
    <GoogleMapProvider googleMapsApiKey="TU_CLAVE_DE_API">
      <div>Tu aplicación aquí</div>
    </GoogleMapProvider>
  );
}
```
 

## Uso del Context
Para usar las propiedades y métodos del contexto, debes importar el contexto `GoogleMapsContext` desde el archivo `GoogleMapsContext.jsx` y usar el hook `useContext` en el componente donde lo necesites.

```javascript
  const { isLoaded, ...allProps } = useContext(GoogleMapsContext);
```


---
---

- Puedes obtener una clave de API de Google Maps siguiendo las instrucciones en la documentación de [Google Maps](https://developers.google.com/maps/gmp-get-started?hl=es-419).
- Para más información, consulta la documentación de [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api).
