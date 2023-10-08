import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import GoogleMapProvider from "./app/contexts/GoogleMapsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleMapProvider>
      <App />
    </GoogleMapProvider>
  </React.StrictMode>
);
