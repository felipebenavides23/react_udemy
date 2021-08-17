export const operaciones = (
    nombre1,
    nombre2,
    setSuma,
    setresta,
    setmulti,
    setdivi,
    setRaiz) => {
    const actualizar = () => {
        const num1 = document.getElementById(nombre1).value;
        const num2 = document.getElementById(nombre2).value;
        respuesta(num1, num2);
    };
    const respuesta = (a, b) => {
        const n1 = parseFloat(a);
        const n2 = parseFloat(b);
        setSuma(n1 + n2);
        setresta(n1 - n2);
        setmulti(n1 * n2);
        setdivi(n1 / n2);
        setRaiz(Math.pow(n1, 1 / n2));
    };

    return { actualizar, }
}