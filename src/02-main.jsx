import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelloWorld } from "./components/HelloWorld";

//const ul = React.createElement("section", null, "Hola que tal zamora");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorld user='Julio' id='5' />
  </React.StrictMode>
  //ul
);
