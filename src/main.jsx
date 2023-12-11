import React from "react";
import ReactDOM from "react-dom/client";
import { HolaMundoApp } from "./HolaMundoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HolaMundoApp
      user={{ name: "Angelica", lastName: "Castro Martinez" }}
      id={580062}
      title={"Hola Angie :)"}
      book ={'Cien Años De Soledad'}
    />
  </React.StrictMode>
);
