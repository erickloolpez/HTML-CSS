//screens variables
const mainScreen = document.querySelector('.layout')
const planScreen = document.querySelector('.plan')

// plans buttons
const btnSediento = document.querySelector('.btnSediento')
const btnRefrescado = document.querySelector('.btnRefrescado')
const btnHidratado = document.querySelector('.btnHidratado')

// plans values
const switchButton = document.getElementById('checkButton')
const sedientoPrice = document.querySelector('.sediento')
const refrescadoPrice = document.querySelector('.refrescado')
const hidratadoPrice = document.querySelector('.hidratado')
const labelPlanS = document.querySelector('.labelPlanS');
const labelPlanR = document.querySelector('.labelPlanR');
const labelPlanH = document.querySelector('.labelPlanH');

//payment info
const paymentInfo = document.querySelector('.payment-info')

switchButton.addEventListener('change', () => {
    if (switchButton.checked) {
        console.log('hola')
        sedientoPrice.innerHTML = '$200'
        refrescadoPrice.innerHTML = '$400'
        hidratadoPrice.innerHTML = '$600'
        labelPlanS.innerHTML= 'Anual'
        labelPlanR.innerHTML= 'Anual'
        labelPlanH.innerHTML= 'Anual'
    }else{
        sedientoPrice.innerHTML = '$10'
        refrescadoPrice.innerHTML = '$12'
        hidratadoPrice.innerHTML = '$15'
        labelPlanS.innerHTML= 'Mensual'
        labelPlanR.innerHTML= 'Mensual'
        labelPlanH.innerHTML= 'Mensual'
    }
})


btnSediento.addEventListener('click', ()=>{

    if(switchButton.checked){
        console.log('puto')
        location.hash = `?PLAN-4=${sedientoPrice.textContent}=Sediento-Anual`
        const [id,price, name] = location.hash.split('=')
        paymentInfo.innerHTML = `<strong>Plan:</strong> ${name} <br><strong>Precio:</strong> ${price}`
    }else{
        location.hash = `?PLAN-1=${sedientoPrice.textContent}=Sediento-Mensual`
    }

    mainScreen.style.display = 'none'
    planScreen.style.display = 'none'
})

window.addEventListener('load', ()=>{
    location.hash = ''
})

btnRefrescado.addEventListener('click', ()=>{

    if(switchButton.checked){
        location.hash = `?PLAN-5=${refrescadoPrice.textContent}=Refrescado-Anual`
    }else{
        location.hash = `?PLAN-2=${refrescadoPrice.textContent}=Refrescado-Mensual`
    }

    mainScreen.style.display = 'none'
    planScreen.style.display = 'none'
})

window.addEventListener('load', ()=>{
    location.hash = ''
})

btnHidratado.addEventListener('click', ()=>{

    if(switchButton.checked){
        location.hash = `?PLAN-6=${hidratadoPrice.textContent}=Hidratado-Anual`
    }else{
        location.hash = `?PLAN-3=${hidratadoPrice.textContent}=Hidratado-Mensual`
    }

    mainScreen.style.display = 'none'
    planScreen.style.display = 'none'
})

window.addEventListener('load', ()=>{
    location.hash = ''
})