const colsGrid = document.querySelector('.table')
let tableBody = document.getElementById('table-body')
let tableHead = document.getElementById('table-head')
let inputHeader = document.querySelector('.input-header')
let inputMain = document.querySelector('.input-main')
const inputFooter = document.querySelector('.input-footer')
const inputFooterTwo = document.querySelector('.input-footer--two')
const collectionButtons = document.querySelector('.collectionButtons')
const buttonNew = document.querySelector('.buttonNew')
const buttonX = document.querySelector('.buttonX')
const inputScreen = document.querySelector('.input')
let map = new Map()

const api = (url, column) => {
    fetch(url)
        .then((res) => {
            if (res.ok) {
                console.log(`HTTP ${column}  request successful`)
            } else {
                consol.log(`HTTP ${column}  request unsuccessful`)
            }
            return res
        })
        .then((res) => res.json())
        .then((data) => {

            console.log(`API ${column}`, data)

            map.set(column, data)
            console.log('Mi mapa', map)
            let template = Object.keys(map.get(`${column}`)[0])
            console.log('Keys del Objeto', template)


            //eliminacion de columnas extras
            switch (column) {
                case 'Clientes':
                    template = cleanClients(template)
                    factoryParts(template, data, column)
            }

        })
        .catch((error) => console.log(error))
}

const apiPost = (answers,controller, action) => {
    fetch(`http://localhost:9099/api/${controller}/${action}`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(answers)

    })
        .then((res) => {
            if (res.ok) {
                console.log('HTTP POST request successful')
            } else {
                console.log('HTTP POST request unsuccessful')
            }
            return res
        })
        .catch((error) => console.log(error))
}

const cleanClients = (template) => {
    let index = template.indexOf('suscripcion')
    template.splice(index, 1)
    let indexTwo = template.indexOf('creado_en')
    template.splice(indexTwo, 1)

    return template
}

const factoryParts = (template, data, column) => {
    let headContent
    let bodyContent

    template.forEach(col => {
        headContent = `<th><i class="fa-solid fa-fingerprint"></i>${col}&UpArrow;</span></th>`

        tableHead += headContent
    })

    data.forEach(cli => {
        const tr = document.createElement('tr')
        tr.addEventListener('click', () => {
            handleClick(cli.id, column)
        })

        const tdInput = document.createElement('input')
        tdInput.setAttribute('id', cli.id)
        tdInput.setAttribute('name', column)
        tdInput.setAttribute('type', 'checkbox')

        tr.appendChild(tdInput)

        for (let i = 0; i < template.length; i++) {
            const td = document.createElement('td')
            const tdText = document.createTextNode(cli[template[i]])

            td.appendChild(tdText)
            tr.appendChild(td)
        }

        tableBody.appendChild(tr)
    })
}

const handleClick = (id, column) => {
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

        let items = map.get(column)
        let itemFound = items.find(item => item.id === id)
        factoryEntries(column, itemFound)


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

        //Id Container
        // idBox.style.display = 'none'
        // idContainer.style.display = 'flex'

        inputScreen.style.display = 'flex'
    }
}

const factoryEntries = (column, itemFound) => {
    if (column == 'Clientes') {
        let template = Object.keys(itemFound)
        template = cleanClients(template)
        factoryOutputs(column, itemFound, template)
    }

}

const factoryOutputs = (column, itemFound, template) => {

    inputHeader.innerHTML = ''

    const img = document.createElement('img')
    img.setAttribute(
        'src',
        './assets/img/usersIcons.png'
    )
    img.setAttribute('alt', `${column}_icon`)

    const inputHeaderId = document.createElement('div')
    inputHeaderId.classList.add('input-header--id')

    const h1 = document.createElement('h1')
    const h1Text = document.createTextNode(column)

    h1.appendChild(h1Text)

    const idContainer = document.createElement('div')
    idContainer.classList.add('id-container')

    const h2 = document.createElement('h2')
    const h2Text = document.createTextNode('ID: ')
    h2.appendChild(h2Text)

    const inputTop = document.createElement('input')
    inputTop.setAttribute('type', 'text')

    idContainer.append(h2, inputTop)

    inputHeaderId.append(h1, idContainer)

    inputHeader.append(img, inputHeaderId)


    //Input Part

    inputMain.innerHTML = ''

    for (let i = 0; i < template.length; i++) {
        const box = document.createElement('div')
        box.classList.add('input-boxes')

        const h2Box = document.createElement('h2')
        const h2BoxText = document.createTextNode(template[i])
        h2Box.appendChild(h2BoxText)

        const inputBox = document.createElement('input')
        inputBox.setAttribute('type', 'text')
        inputBox.setAttribute('id', `${column}_${template[i]}`)
        inputBox.value = itemFound[template[i]]

        box.append(h2Box, inputBox)

        inputMain.append(box)
    }

}

const handleClickNew = () => {
    const [err, column] = location.hash.split('#')
    var group = "input[type='checkbox'][name='" + column + "']";

    document.querySelectorAll(group).forEach(function (checkbox) {
        checkbox.checked = false;
    });

    inputFooter.classList.remove('input-footer')
    inputFooter.classList.add('active')

    inputFooterTwo.classList.add('input-footer--two')

    colsGrid.style.gridTemplateColumns = '70% 30%'


    let itemFound = map.get(column)[1]

    Object.keys(itemFound).forEach(clave => {
        itemFound[clave] = ''
    });

    let template = Object.keys(itemFound)
    template = cleanClients(template)
    factoryOutputs(column, itemFound, template)


    //botones New y X
    collectionButtons.style.width = '10%'
    buttonNew.style.width = '50%'
    buttonX.style.width = '35%'
    buttonX.style.display = 'block'

    //Id Container
    // idContainer.style.display = 'none'
    // idBox.style.display = 'flex'

    inputScreen.style.display = 'flex'

}

const setPost = (method) => {
    const [err, column] = location.hash.split('#')

    if (column == 'Clientes') {
        let item = map.get(column)[1]
        let template = Object.keys(item)
        template = cleanClients(template)

        let action = (method == 'post') ? 'crearCliente' : 'actualizarCliente'

        factoryBody(column, action, template)
    }
}

const factoryBody = (column,action, template)=> {
        const answers = {}

        for (let i = 0; i < template.length; i++) {
            const inputItem = document.getElementById(`${column}_${template[i]}`)
            answers[template[i]] = inputItem.value
            inputItem.value = ''
        }
        
        apiPost(answers, column, action)
}

buttonX.addEventListener('click', () => {
    colsGrid.style.gridTemplateColumns = '100%'

    collectionButtons.style.width = '5%'
    buttonX.style.display = 'none'
    buttonNew.style.width = '100%'

})

let getClientes = 'http://localhost:9099/api/clientes/listarClientes'
api(getClientes, 'Clientes')
