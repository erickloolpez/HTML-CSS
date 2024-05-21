fetch('http://localhost:9099/api/clientes/listarClientes')
    .then((res) => {
        if (res.ok) {
            console.log('HTTP request successful')
        } else {
            console.log('HTTP request unsuccessful')
        }
        return res
    })
    .then(((res)=> res.json()))
    .then((data) => console.log(data))
    .catch((error)=>console.log(error))