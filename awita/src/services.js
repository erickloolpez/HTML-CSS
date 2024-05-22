const inputScreen = document.querySelector('.input')

const tableHead = document.getElementById('table-head')
const tableBody = document.getElementById('table-body')


const postButton = document.getElementById('postButton')
const inputId = document.getElementById('clienteID')
const inputNombre = document.getElementById('clienteNombre')
const inputApellido = document.getElementById('clienteApellido')
const inputEmail = document.getElementById('clienteEmail')

const clients = []
const colsGrid = document.querySelector('.table')
let flag = true
const inputFooterTwo = document.querySelector('.input-footer--two')
const inputFooter = document.querySelector('.input-footer')

//Botones New y X 
const buttonX = document.getElementById('buttonX')
const buttonNew = document.getElementById('buttonNew')
const collectionButtons = document.querySelector('.collectionButtons')


postButton.addEventListener('click', () => {

    fetch('http://localhost:9099/api/clientes/crearCliente', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: inputId.value,
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            email: inputEmail.value
        })

    })
        .then((res) => {
            if (res.ok) {
                console.log('HTTP request successful')
            } else {
                consol.log('HTTP request unsuccessful')
            }
            return res
        })
        .catch((error) => console.log(error))

})

fetch('http://localhost:9099/api/clientes/listarClientes')
    .then((res) => {
        if (res.ok) {
            console.log('HTTP request successful')
        } else {
            consol.log('HTTP request unsuccessful')
        }
        return res
    })
    .then((res) => res.json())
    .then((data) => {
        let listClients
        console.log(data)

        data.forEach((client) => {
            listClients = `
                      <tr onclick='handleClick(${client.id})'>
                    <td><input id='${client.id}' type="checkbox" name='clients'/></td>
                        <td> ${client.id} </td>
                        <td> ${client.nombre}</td>
                        <td> ${client.apellido} </td>
                        <td> ${client.email}</td>
                    </tr>
        `
            tableBody.innerHTML += listClients


            clients.push(client)
        })




    })
    .catch((error) => console.log(error))

buttonX.addEventListener('click', () => {
    colsGrid.style.gridTemplateColumns = '100%'

    collectionButtons.style.width = '5%'
    buttonX.style.display = 'none'
    buttonNew.style.width = '100%'

})

function handleClick(id) {
    flag = true
    const checkItem = document.getElementById(id)
    if (checkItem.checked) {
        //Boton New
        collectionButtons.style.width = '5%'
        buttonX.style.display = 'none'
        buttonNew.style.width = '100%'

        checkItem.checked = false

        colsGrid.style.gridTemplateColumns = '100%'
        inputScreen.style.display = 'none'
    } else {
        inputFooter.classList.remove('active')
        inputFooter.classList.add('input-footer')

        inputFooterTwo.classList.remove('input-footer--two')
        inputFooterTwo.classList.add('active')

        colsGrid.style.gridTemplateColumns = '70% 30%'

        let clientFound = clients.find(cli => cli.id == id)
        console.log('Encontrado', clientFound)

        inputId.value = clientFound.id
        inputNombre.value = clientFound.nombre
        inputApellido.value = clientFound.apellido
        inputEmail.value = clientFound.email


        var group = "input[type='checkbox'][name='" + checkItem.name + "']";

        document.querySelectorAll(group).forEach(function (checkbox) {
            checkbox.checked = false;
        });

        checkItem.checked = true

        //botones New y X
        collectionButtons.style.width = '10%'
        buttonNew.style.width = '50%'
        buttonX.style.width = '35%'
        buttonX.style.display = 'block'

        inputScreen.style.display = 'flex'


    }

}

function handleClickNew() {//podriamos mandar el nombre del name
    if (flag) {
        var group = "input[type='checkbox'][name='" + 'clients' + "']";

        document.querySelectorAll(group).forEach(function (checkbox) {
            checkbox.checked = false;
        });

        inputFooter.classList.remove('input-footer')
        inputFooter.classList.add('active')

        inputFooterTwo.classList.add('input-footer--two')

        colsGrid.style.gridTemplateColumns = '70% 30%'

        inputId.value = ''
        inputNombre.value = ''
        inputApellido.value = ''
        inputEmail.value = ''

        //botones New y X
        collectionButtons.style.width = '10%'
        buttonNew.style.width = '50%'
        buttonX.style.width = '35%'
        buttonX.style.display = 'block'

        inputScreen.style.display = 'flex'

        flag = false
    } else {
        colsGrid.style.gridTemplateColumns = '100%'
        flag = true
        //boton New
        collectionButtons.style.width = '5%'
        buttonX.style.display = 'none'
        buttonNew.style.width = '100%'
        inputScreen.style.display = 'none'
    }
}

