import React from "react";
import ReactDOM from "react-dom/client";
import { HolaMundo } from "./components/HelloWorld";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HolaMundo 
      user={ {name: 'Paty', lastName:'Aburto'}} 
      id={580062}
      title={'Hola Culoncita :)'}
      />
  </React.StrictMode>
);
