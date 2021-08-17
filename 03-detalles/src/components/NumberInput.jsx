import React, { useState } from "react";
import PropTypes from "prop-types";

const NumberInput = ({ name }) => {
  const [Numero, setNumero] = useState(0);
  const handleNumero = (e) => {
    setNumero(parseFloat(e.target.value));
  };

  return (
    <>
      <label className="mx-2 my-2">
        {name}{" "}
        <input id={name} value={Numero} onChange={handleNumero} type="number" />
      </label>
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
