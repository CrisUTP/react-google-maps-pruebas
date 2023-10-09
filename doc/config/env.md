# Config env.js
[Inicio](../../README.md)

El archivo `env.js` contiene la configuración para la API_KEY de Google Maps utilizada en la aplicación. La API_KEY se almacena en el archivo `.env` con la siguiente estructura:

```
VITE_API_KEY_GOOGLE_MAPS=
```

En el archivo `env.js`, la API_KEY de Google Maps se exporta de la siguiente manera:

```javascript
export const API_KEY_GOOGLE_MAPS = import.meta.env.VITE_API_KEY_GOOGLE_MAPS;
```

Esta línea de código asigna la variable `API_KEY_GOOGLE_MAPS` con el valor de `VITE_API_KEY_GOOGLE_MAPS` del entorno de ejecución. Esto permite que la API_KEY esté disponible para su uso en la aplicación.

Asegúrate de que el archivo `.env` contenga la API_KEY válida de Google Maps para que la aplicación funcione correctamente. Si no tienes una API_KEY válida, puedes obtener una en la [consola de Google Cloud](https://console.cloud.google.com/).
