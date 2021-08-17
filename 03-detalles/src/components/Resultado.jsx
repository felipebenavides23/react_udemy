import React from "react";
import PropTypes from "prop-types";

const Resultado = ({ operacion, resultado }) => {
  return (
    <>
      <br />
      <span>
        el resultado de la {operacion} es :{resultado}
      </span>
    </>
  );
};

Resultado.propTypes = {
  operacion: PropTypes.string,
  resultado: PropTypes.number,
};

export default Resultado;
