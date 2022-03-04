import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/app.scss";
import { StoreProvider } from "./store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
