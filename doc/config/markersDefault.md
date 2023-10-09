
# Config markersDefault.js
[Inicio](../../README.md)

El archivo `markersDefault.js` define un array de marcadores predefinidos para ser utilizados en una aplicación con Google Maps. 

Cada marcador contiene un identificador único (`id`) y propiedades de marcador (`markerProp`) que incluyen el título y la posición en el mapa.

## Estructura de Datos

El array `markersDefault` contiene objetos con la siguiente estructura:
- `id` (entero): Un identificador único para cada marcador.
- `markerProp` (MarkerProps): Un objeto que contiene propiedades de marcador, incluyendo el título y la posición del marcador.

## Ejemplo de Uso

A continuación, se muestra un ejemplo de cómo se utiliza este array de marcadores en una aplicación de Google Maps:

```javascript
import { markersDefault } from './markersDefault';

// Usar los marcadores predefinidos en un componente de mapa
const MapComponent = () => {
  return (
    <GoogleMap>
      {markersDefault.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.markerProp.position}
          title={marker.markerProp.title}
        />
      ))}
    </GoogleMap>
  );
}
```

En este ejemplo, el array `markersDefault` se importa y se mapea para crear marcadores en un componente de mapa de Google.

## Marcadores Predefinidos
Los marcadores predefinidos representan ubicaciones específicas de la ciudad de Puebla.

1. **Universidad Tecnológica de Puebla**
   - Título: Universidad Tecnológica de Puebla
   - Posición: Latitud: 19.062977416103, Longitud: -98.15330936806744

2. **Catedral de Puebla**
   - Título: Catedral de Puebla
   - Posición: Latitud: 19.04308307426692, Longitud: -98.19832910341982

3. **Fuerte de Loreto**
   - Título: Fuerte de Loreto
   - Posición: Latitud: 19.055251180638127, Longitud: -98.18349748431017

4. **Fuente de los Frailes**
   - Título: Fuente de los Frailes
   - Posición: Latitud: 19.096698327773797, Longitud: -98.23361774759886

