import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeContext } from "./context/DarkModeContext";
import "@radix-ui/themes/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <DarkModeContext>
  <App />
  //</DarkModeContext>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
