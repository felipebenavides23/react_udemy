const frutas = ["manzanas", "uva", "pera"]
const citricos = ["naranjas ", "limon", "toronja"]
//  los 3 puntos "..." desestructura  los array y los combina de forma correcta y ayuda a manipular los datos del array
const nuevo = [...frutas, ...citricos]

document.write(nuevo)