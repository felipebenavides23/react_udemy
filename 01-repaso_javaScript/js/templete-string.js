const nombre = "felipe castillo"
const edad = new Date().getFullYear() - 2000

document.write('hola ' + nombre + ", tu edad es de:" + edad + "<br>")

// la otra forma hacer  de concatenar variable con texto corriendo se hace con ` `con comillas flotantes  o backticks
const saludo = `<br> hola ${nombre}, tu edad es de : ${edad}`.toUpperCase()
document.write(saludo)