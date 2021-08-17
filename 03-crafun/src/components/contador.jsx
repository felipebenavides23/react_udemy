import React, { useState } from "react";
const Contador = ({ inicial, factor }) => {
  const [contador, setcontador] = useState(inicial);

  const aumentar = () => {
    setcontador((actual) => actual + factor);
  };

  const disminuir = () => {
    setcontador(contador - factor);
  };

  return (
    <div>
      <h2>Contador : {contador}</h2>
      <hr />
      <button onClick={aumentar}>aumentar</button>
      <button onClick={disminuir}>disminuir</button>
    </div>
  );
};

export default Contador;
