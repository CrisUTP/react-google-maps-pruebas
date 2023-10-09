# Componente IsLoading
[Inicio](../../README.md)

El componente `IsLoading` es una utilidad que permite mostrar un componente de carga (por defecto, un mensaje "Loading...") mientras se espera a que ciertos datos o recursos se carguen. 

Esto es útil para proporcionar una experiencia de usuario más fluida al cargar contenido asincrónico.

## Props

El componente `IsLoading` acepta las siguientes propiedades:

- `isLoaded` (obligatorio): Un valor booleano que indica si los datos o recursos han sido cargados con éxito. Cuando `isLoaded` es `true`, se muestra el contenido real (`children`), y cuando es `false`, se muestra el componente de carga (`componentLoader`).

- `children` (obligatorio): El contenido que se mostrará cuando `isLoaded` sea `true`. Esto puede ser cualquier elemento o componente React.

- `componentLoader` (opcional): El componente que se mostrará cuando `isLoaded` sea `false`. De forma predeterminada, se muestra un mensaje simple de "Loading...". Puedes personalizar este componente de carga según tus necesidades.

## Uso

Puedes utilizar el componente `IsLoading` de la siguiente manera en tu aplicación React:

```javascript
import React, { useState, useEffect } from 'react';
import IsLoading from './IsLoading';

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una operación asincrónica, como una solicitud HTTP
    setTimeout(() => {
      // Supongamos que los datos se cargaron con éxito
      setData({ /* ... */ });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <IsLoading isLoaded={!isLoading}>
      {/* El contenido real que se mostrará cuando los datos estén cargados */}
      <div>
        {/* ... */}
      </div>
    </IsLoading>
  );
}

export default MyComponent;
