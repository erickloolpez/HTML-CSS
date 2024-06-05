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

const apiGetID = async (url, column, answer) => {
    await fetch(url)
        .then((res) => {
            if (res.ok) {
                console.log(`HTTP ${column}  request GET ID successful`)
            } else {
                console.log(`HTTP ${column}  request GET ID unsuccessful`)
            }
            return res
        })
        .then((res) => res.json())
        .then((data) => {
            if(data){
                console.log('El usuario ya existe')
            }else{
                console.log('Enviando Cliente apiPostCliente', answer)
                apiPostCliente(answer)
            }
        })
}

const apiPostCliente = async (data) => {
    await fetch(`http://localhost:9099/api/clientes/crearClientes`, {
        method: `post`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
        .then((res) => {
            if (res.ok) {
                console.log(`HTTP post Clientes request successful`)
            } else {
                console.log(`HTTP post Clientes request unsuccessful`)
            }
            return res
        })
        .catch((error) => console.log(error))
}

const api = async (url, column) => {
    await fetch(url)
        .then((res) => {
            if (res.ok) {
                console.log(`HTTP ${column}  request GET successful`)
            } else {
                console.log(`HTTP ${column}  request GET unsuccessful`)
            }
            return res
        })
        .then((res) => res.json())
        .then((data) => {


            location.hash = `${column}`

            map.set(column, data)
            let template = Object.keys(map.get(`${column}`)[0])

            //eliminacion de columnas extras
            switch (column) {
                case 'Clientes':
                    template = cleanClients(template)
                    factoryParts(template, data, column)
                    break
                case 'Planes':
                    template = cleanPlans(template)
                    factoryParts(template, data, column)
                    break
                case 'Suscripciones':
                    template = cleanSuscripciones(template, 0)
                    factoryParts(template, data, column)
                    break
                case 'Historial':
                    template = cleanHistorial(template)
                    factoryParts(template, data, column)
                    break
                case 'Factura':
                    template = cleanFactura(template)
                    factoryParts(template, data, column)
                    break
            }

        })
        .catch((error) => console.log(error))
}

const apiPost = async (answers, controller, action, method, uri) => {
    await fetch(`http://localhost:9099/api/${controller}/${action}`, {
        method: `${method}`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(answers)

    })
        .then((res) => {
            if (res.ok) {
                console.log(`HTTP ${method} request successful`)
                api(uri, controller)
            } else {
                console.log(`HTTP ${method} request unsuccessful`)
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

const cleanPlans = (template) => {
    let index = template.indexOf('historial_plan')
    template.splice(index, 1)
    index = template.indexOf('suscripcion')
    template.splice(index, 1)
    index = template.indexOf('creado_en')
    template.splice(index, 1)

    return template
}

const cleanSuscripciones = (template, show) => {
    let index = template.indexOf('factura')
    template.splice(index, 1)
    index = template.indexOf('historial_plan')
    template.splice(index, 1)
    index = template.indexOf('planes')
    template.splice(index, 1)
    index = template.indexOf('cliente')
    template.splice(index, 1)
    index = template.indexOf('creado_en')
    template.splice(index, 1)

    if (show == 1) {
        index = template.indexOf('fecha_suscripcion')
        template.splice(index, 1)

        return template
    } else {
        return template
    }
}

const cleanHistorial = (template) => {
    let index = template.indexOf('creado_en')
    template.splice(index, 1)
    index = template.indexOf('factura')
    template.splice(index, 1)
    index = template.indexOf('suscripcion')
    template.splice(index, 1)
    index = template.indexOf('planes')
    template.splice(index, 1)

    return template
}

const cleanFactura = (template) => {
    let index = template.indexOf('historial_plan')
    template.splice(index, 1)
    index = template.indexOf('suscripcion')
    template.splice(index, 1)

    return template
}

const factoryParts = (template, data, column) => {
    tableHead.innerHTML = ''
    tableBody.innerHTML = ''
    let headContent

    const thInput = document.createElement('th')
    const tdInputHead = document.createElement('input')
    tdInputHead.setAttribute('type', 'checkbox')
    thInput.appendChild(tdInputHead)

    tableHead.appendChild(thInput)

    template.forEach(col => {
        headContent = `<th>${col}</th>`

        tableHead.innerHTML += headContent
    })
    changePage(1, column, template)
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
    let template
    switch (column) {
        case 'Clientes':
            template = Object.keys(itemFound)
            template = cleanClients(template)
            factoryOutputs(column, itemFound, template)
            break
        case 'Planes':
            template = Object.keys(itemFound)
            template = cleanPlans(template)
            factoryOutputs(column, itemFound, template)
            break
        case 'Suscripciones':
            template = Object.keys(itemFound)
            template = cleanSuscripciones(template, 1)
            factoryOutputs(column, itemFound, template)
            break
        case 'Historial':
            template = Object.keys(itemFound)
            template = cleanHistorial(template)
            factoryOutputs(column, itemFound, template)
            break
        case 'Factura':
            template = Object.keys(itemFound)
            template = cleanFactura(template)
            factoryOutputs(column, itemFound, template)
    }

}

const factoryOutputs = (column, itemFound, template) => {

    inputHeader.innerHTML = ''

    const img = document.createElement('img')

    switch (column) {
        case 'Clientes':
            img.setAttribute(
                'src',
                './assets/img/usersIcons.png'
            )
            break
        case 'Planes':
            img.setAttribute(
                'src',
                './assets/img/planesIcon.png'
            )
            break
        case 'Suscripciones':
            img.setAttribute(
                'src',
                './assets/img/subscriptionIcon.png'
            )
            break
        case 'Historial':
            img.setAttribute(
                'src',
                './assets/img/historialIcon.png'
            )
        case 'Factura':
            img.setAttribute(
                'src',
                './assets/img/facturaIcon.png'
            )
    }
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


    let itemFound = map.get(`${column}`)[1]

    Object.keys(itemFound).forEach(clave => {
        itemFound[clave] = ''
    });

    factoryEntries(column, itemFound)


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

const setMethod = (method) => {
    const [err, column] = location.hash.split('#')

    if (column == 'Clientes') {
        let item = map.get(column)[1]
        let template = Object.keys(item)
        template = cleanClients(template)

        let action = setAction(method, column)

        factoryBody(column, action, template, method, getClientes)
    } else if (column == 'Planes') {
        let item = map.get(column)[1]
        let template = Object.keys(item)
        template = cleanPlans(template)

        let action = setAction(method, column)

        factoryBody(column, action, template, method, getPlanes)
    } else if (column == 'Suscripciones') {
        let item = map.get(column)[1]
        let template = Object.keys(item)
        template = cleanSuscripciones(template, 1)

        let action = setAction(method, column)

        factoryBody(column, action, template, method, getSuscripciones)
    } else if (column == 'Historial') {
        let item = map.get(column)[1]
        let template = Object.keys(item)
        template = cleanHistorial(template)

        let action = setAction(method, column)

        factoryBody(column, action, template, method, getHistorial)
    } else {
        let item = map.get(column)[1]
        let template = Object.keys(item)
        template = cleanFactura(template)

        let action = setAction(method, column)

        factoryBody(column, action, template, method, getFactura)
    }
}

const setAction = (method, column) => {
    let action
    switch (method) {
        case 'post':
            action = `crear${column}`
            break
        case 'put':
            action = `actualizar${column}`
            break
        case 'delete':
            action = `eliminar${column}`
            break
    }
    return action
}

const factoryBody = (column, action, template, method, uri) => {
    const answers = {}

    for (let i = 0; i < template.length; i++) {
        const inputItem = document.getElementById(`${column}_${template[i]}`)
        answers[template[i]] = inputItem.value
        inputItem.value = ''
    }

    apiPost(answers, column, action, method, uri)
}

buttonX.addEventListener('click', () => {
    colsGrid.style.gridTemplateColumns = '100%'

    collectionButtons.style.width = '5%'
    buttonX.style.display = 'none'
    buttonNew.style.width = '100%'

})

api(getClientes, 'Clientes')



//Pagination
var current_page = 1;
var records_per_page = 20;


function prevPage() {
    const [err, column] = location.hash.split('#')
    let template = Object.keys(map.get(`${column}`)[0])
    template = cleanClients(template)

    if (current_page > 1) {
        current_page--;
        changePage(current_page, column, template);
    }
}

function nextPage() {
    const [err, column] = location.hash.split('#')
    let template = Object.keys(map.get(`${column}`)[0])
    template = cleanClients(template)

    if (current_page < numPages(column)) {
        current_page++;
        changePage(current_page, column, template);
    }
}

function changePage(page, column, template) {
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages(column)) page = numPages(column);

    tableBody.innerHTML = ''

    for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {

        let cli = map.get(`${column}`)[i]

        const tr = document.createElement('tr')
        tr.addEventListener('click', () => {
            handleClick(cli.id, column)
        })

        const tdInputContainer = document.createElement('td')
        const tdInput = document.createElement('input')
        tdInput.setAttribute('id', cli.id)
        tdInput.setAttribute('name', column)
        tdInput.setAttribute('type', 'checkbox')
        tdInputContainer.appendChild(tdInput)

        tr.appendChild(tdInputContainer)

        for (let i = 0; i < template.length; i++) {
            const td = document.createElement('td')
            const tdText = document.createTextNode(cli[template[i]])

            td.appendChild(tdText)
            tr.appendChild(td)
        }

        tableBody.appendChild(tr)
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages(column)) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages(column) {
    return Math.ceil(map.get(column).length / records_per_page);
}

