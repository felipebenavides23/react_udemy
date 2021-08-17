import React, { useState } from "react";
import { operaciones } from "../Helpers/operaciones";
import NumberInput from "./NumberInput";
import Resultado from "./Resultado";

const Calculadora = () => {
  const [suma, setSuma] = useState(0);
  const [resta, setresta] = useState(0);
  const [multi, setmulti] = useState(0);
  const [divi, setdivi] = useState(0);
  const [raiz, setRaiz] = useState(0);

  const nombre1 = "numero 1";
  const nombre2 = "numero 2";

  const { actualizar } = operaciones(
    nombre1,
    nombre2,
    setSuma,
    setresta,
    setmulti,
    setdivi,
    setRaiz
  );

  return (
    <div onKeyDown={actualizar} onClick={actualizar}>
      <NumberInput name={nombre1} />
      <NumberInput name={nombre2} />

      <Resultado operacion="Suma" resultado={suma} />
      <Resultado operacion="Resta" resultado={resta} />
      <Resultado operacion="Multiplicacion" resultado={multi} />
      <Resultado operacion="Divicion" resultado={divi} />
      <Resultado operacion="raiz" resultado={raiz} />
    </div>
  );
};

export default Calculadora;
