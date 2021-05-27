const peticion = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await res.json()
    return data
}

const data = peticion().then(console.log)