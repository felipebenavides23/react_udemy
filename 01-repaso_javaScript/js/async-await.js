
//forma de formular promesas normalmente
const saludo = () => {
    return new Promise((res, rej) => {
        res("hola mundo")
    })
}

saludo().then((res) => console.log(res))

// forma en al que se hace con async await
const saludo2 = async () => {
    return "hola mundo2"
}

saludo2().then((res2) => console.log(res2))
// implementacion del await
const peticion = async () => {
    setTimeout(() => {
        const datos = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
        }
        console.log(datos)

    }, 3000)
}


peticion().then(console.log)