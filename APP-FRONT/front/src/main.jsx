import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./estilos/index.css";
import App from "../src/App.jsx";
import { ThemeContextProvider, UserProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* inyecta propiedades a nuestro componente para poder acceder al historial de navegación y realizar redirecciones de rutas */}
    <ThemeContextProvider> {/* inyecta propiedades a nuestro componente para poder acceder al contexto del tema */}
     <UserProvider>

      <App />

     </UserProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
