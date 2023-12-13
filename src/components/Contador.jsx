/* eslint-disable no-unreachable */
import { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const Contador = ({ valor }) => {
  const [contador, setContador] = useState(valor);
  const autoIncrementador = () => setContador((c) => c + 1);

  return (
    <>
      <h2>Applicación Autoincrementable en {contador}</h2>
      <button onClick={autoIncrementador}> Incrementar en 1</button>
    </>
  );
};

Contador.prototype = {
  valor: PropTypes.number.isRequired,
};

Contador.defaultProps={
  valor: 500
}