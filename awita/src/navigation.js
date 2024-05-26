loginPicture.addEventListener('click', () => {
    layoutSection.style.display = 'none';
    planSection.style.display = 'none';
    asideSection.style.display = 'grid';

    location.hash = 'Clientes'

    clienteTable.classList.add('active-table')
})



/*display the tables of each control*/
clienteBtn.addEventListener('click', () => {
    clienteBtn.classList.add('active')

    api(getClientes, 'Clientes')

    planBtn.classList.remove('active')
    suscripcionBtn.classList.remove('active')
    historialBtn.classList.remove('active')
    facturaBtn.classList.remove('active')


})

planBtn.addEventListener('click', () => {
    planBtn.classList.add('active')

    api(getPlanes, 'Planes')

    clienteBtn.classList.remove('active')
    suscripcionBtn.classList.remove('active')
    historialBtn.classList.remove('active')
    facturaBtn.classList.remove('active')

})

suscripcionBtn.addEventListener('click', () => {
    suscripcionBtn.classList.add('active')

    api(getSuscripciones, 'Suscripciones')

    planBtn.classList.remove('active')
    clienteBtn.classList.remove('active')
    historialBtn.classList.remove('active')
    facturaBtn.classList.remove('active')
})

historialBtn.addEventListener('click', () => {
    historialBtn.classList.add('active')

    api(getHistorial, 'Historial')

    planBtn.classList.remove('active')
    suscripcionBtn.classList.remove('active')
    clienteBtn.classList.remove('active')
    facturaBtn.classList.remove('active')
})

facturaBtn.addEventListener('click', () => {
    facturaBtn.classList.add('active')

    api(getFactura,'Factura')

    planBtn.classList.remove('active')
    suscripcionBtn.classList.remove('active')
    historialBtn.classList.remove('active')
    clienteBtn.classList.remove('active')
})


//Switch de la seccion de planes
switchButton.addEventListener('change', () => {
    if (switchButton.checked) {
        console.log('hola')
        sedientoPrice.innerHTML = '$200'
        refrescadoPrice.innerHTML = '$400'
        hidratadoPrice.innerHTML = '$600'
        labelPlanS.innerHTML = 'Anual'
        labelPlanR.innerHTML = 'Anual'
        labelPlanH.innerHTML = 'Anual'
    } else {
        sedientoPrice.innerHTML = '$10'
        refrescadoPrice.innerHTML = '$12'
        hidratadoPrice.innerHTML = '$15'
        labelPlanS.innerHTML = 'Mensual'
        labelPlanR.innerHTML = 'Mensual'
        labelPlanH.innerHTML = 'Mensual'
    }
})

//Section de los botones que estan en los planes

btnSediento.addEventListener('click', (event) => {
    event.preventDefault();
    layoutSection.style.display = 'none'
    planSection.style.display = 'none'
    paymentSection.style.display = 'grid'

    if (switchButton.checked) {
        location.hash = `?PLAN-4=${sedientoPrice.textContent}=Sediento-Anual`
        const [id, price, name] = location.hash.split('=')
        paymentInfo.innerHTML = `<strong>Plan:</strong> ${name} <br><strong>Precio:</strong> ${price}`
        const [errValue, cleanValue] = id.split('?')
        planIdText.value = `${cleanValue}`
    } else {
        location.hash = `?PLAN-1=${sedientoPrice.textContent}=Sediento-Mensual`
        const [id, price, name] = location.hash.split('=')
        paymentInfo.innerHTML = `<strong>Plan:</strong> ${name} <br><strong>Precio:</strong> ${price}`
        const [errValue, cleanValue] = id.split('?')
        planIdText.value = `${cleanValue}`
    }

    layoutSection.style.display = 'none';
    planSection.style.display = 'none';

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0)
})


btnRefrescado.addEventListener('click', (event) => {
    event.preventDefault();
    layoutSection.style.display = 'none'
    planSection.style.display = 'none'
    paymentSection.style.display = 'grid';

    if (switchButton.checked) {
        location.hash = `?PLAN-5=${refrescadoPrice.textContent}=Refrescado-Anual`
        const [id, price, name] = location.hash.split('=')
        paymentInfo.innerHTML = `<strong>Plan:</strong> ${name} <br><strong>Precio:</strong> ${price}`
        const [errValue, cleanValue] = id.split('?')
        planIdText.value = `${cleanValue}`
    } else {
        location.hash = `?PLAN-2=${refrescadoPrice.textContent}=Refrescado-Mensual`
        const [id, price, name] = location.hash.split('=')
        paymentInfo.innerHTML = `<strong>Plan:</strong> ${name} <br><strong>Precio:</strong> ${price}`
        const [errValue, cleanValue] = id.split('?')
        planIdText.value = `${cleanValue}`
    }

    layoutSection.style.display = 'none';
    planSection.style.display = 'none';

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0)
})

btnHidratado.addEventListener('click', (event) => {
    event.preventDefault();
    layoutSection.style.display = 'none'
    planSection.style.display = 'none'
    paymentSection.style.display = 'grid'

    if (switchButton.checked) {
        location.hash = `?PLAN-6=${hidratadoPrice.textContent}=Hidratado-Anual`
        const [id, price, name] = location.hash.split('=')
        paymentInfo.innerHTML = `<strong>Plan:</strong> ${name} <br><strong>Precio:</strong> ${price}`
        const [errValue, cleanValue] = id.split('?')
        planIdText.value = `${cleanValue}`
    } else {
        location.hash = `?PLAN-3=${hidratadoPrice.textContent}=Hidratado-Mensual`
        const [id, price, name] = location.hash.split('=')
        paymentInfo.innerHTML = `<strong>Plan:</strong> ${name} <br><strong>Precio:</strong> ${price}`
        const [errValue, cleanValue] = id.split('?')
        planIdText.value = `${cleanValue}`
    }

    layoutSection.style.display = 'none';
    planSection.style.display = 'none';

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0)
})


//Icono del layout de Factura para volver al inicio
navTwoLogo.addEventListener('click', () => {
    paymentSection.style.display = 'none';
    layoutSection.style.display = 'flex'
    planSection.style.display = 'flex'

    location.hash = ''

})

//Boton que genera la nueva factura
btnCrearFactura.addEventListener('click', () => {
    payContainer.style.display = 'none'
    payLoading.style.display = 'grid'
    lucky.classList.add('active')
})

//Animacion de los elementos dentro del spinner
lucky.addEventListener('animationend', () => {
    checkSpinner.style.display = 'block'
    textSpinner.style.display = 'block'
    buttonSpinner.style.display = 'inline-block'
})

//Boton que vuelve al inicio dentro del spinner
buttonSpinner.addEventListener('click', () => {
    payLoading.style.display = 'none'
    checkSpinner.style.display = 'none'
    textSpinner.style.display = 'none'
    buttonSpinner.style.display = 'none'
    paymentSection.style.display = 'none'

    layoutSection.style.display = 'flex'
    planSection.style.display = 'flex'
})


//Boto que abre toda la seccion del ADMIN
adminLogo.addEventListener('click', () => {
    layoutSection.style.display = 'flex';
    planSection.style.display = 'flex';
    asideSection.style.display = 'none';
    clienteTable.classList.remove('active-table');
})


//Todo lo que tiene que ver con el window
window.addEventListener('load', () => {
    paymentSection.style.display = 'none'
})

