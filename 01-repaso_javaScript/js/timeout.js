const evaluar = () => {
    const edad = prompt("cual es tu edad?")

    if (edad <= 18) {
        alert("menor de edad")
        return
    }

    alert("eres mayor de edad")
}


// retrasar el tiempo de la efecucion de una funcion

setTimeout(evaluar, 3000);