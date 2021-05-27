const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("esto no es valido")
        } else {
            resolve(a + b)
        }

    })
}
// .then ejecuta el codigo si la respuesta de la promesa es positiva 
const respuesta = sumar(-3, 5)
    .then((res) => { document.write(res) })
    .catch((error) => { document.write(error) })
// .catch ejecuta el codigo encaso de que la promesa de una respuesta negativa
