const peticon = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    return data
}

const data = peticon().then(console.log)