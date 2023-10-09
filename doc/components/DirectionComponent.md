# DirectionsRendererComponent

[Inicio](../../README.md)


El componente `DirectionsRendererComponent` es una parte de una aplicación que utiliza la biblioteca `@react-google-maps/api` para trazar rutas desde una ubicación de origen hasta una ubicación de destino en un mapa de Google. 

Este componente debe estar dentro del componente [MapGoogle](../components/MapGoogle.md) para que se renderize la ruta dentro del mapa.

## Props

El componente acepta las siguientes propiedades:

- `origin` (obligatorio): La ubicación de origen desde donde se trazará la ruta.
- `destination` (obligatorio): La ubicación de destino a la que se trazará la ruta.
    - Valores permitidos para origin y destination:
        - `string`: Una cadena que representa la ubicación por ejemplo "Ciudad de Mexico".
        - `object`: Un objeto que representa la ubicación por ejemplo `{lat: 19.062977416103, lng: -98.15330936806744}`.
- `travelMode` (opcional): El modo de transporte, que puede ser `google.maps.TravelMode.DRIVING` (modo de conducción) de forma predeterminada. Puede personalizarse según las opciones proporcionadas por la API de Google Maps.

## Uso

Puedes utilizar el componente `DirectionsRendererComponent` de la siguiente manera en tu aplicación React:

```javascript
<MapGoogle>
    <DirectionsRendererComponent origin={"Ciudad de Puebla"} destination={"Ciudad de Mexico"} />
    <DirectionsRendererComponent
        origin={{lat: 19.062977416103, lng: -98.15330936806744}}
        destination={{lat: 19.04308307426692, lng: -98.19832910341982 }}
    />
</MapGoogle>
```