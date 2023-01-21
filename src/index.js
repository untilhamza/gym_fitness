import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./auth/auth_context";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
