import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./authConfig";

ReactDOM.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>,
  document.getElementById("root")
);

