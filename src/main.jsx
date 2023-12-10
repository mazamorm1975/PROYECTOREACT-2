import React from "react";
import ReactDOM from "react-dom/client";
import { HolaMundo } from "./components/HelloWorld";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HolaMundo user={ 'Mario Zamora'} id={580062}/>
  </React.StrictMode>
);
