﻿/* This are going to be the princial sections*/
const mainForm = document.getElementById('form1');
const layoutSection = document.querySelector('.layout');
const planSection = document.querySelector('.plan');
const asideSection = document.querySelector('.container-aside');
const paymentSection = document.querySelector('.payment')

/* NavTwo logo*/
const navTwoLogo = document.getElementById('navTwo-logo')

/*logoAdmin*/
const adminLogo = document.getElementById('adminLogo')

/*Picture of the login*/
const loginPicture = document.querySelector('.main-menu--circle');


/*Variables for change the table*/
const clienteTable = document.getElementById('clienteTable');

//Botones del aside de la seccion del ADMIN
const clienteBtn = document.querySelector('.btnClientes');
const planBtn = document.querySelector('.btnPlanes');
const suscripcionBtn = document.querySelector('.btnSuscripcion');
const historialBtn = document.querySelector('.btnHistorial');
const facturaBtn = document.querySelector('.btnFactura');

/*Varibles for the Chart*/
const god = document.getElementById('inputBungee');
const juda = document.getElementById('halfBungee');

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
const planIdText = document.getElementById('TextBoxPlanID')

const spinner = document.getElementById('lucky')
const spinnerIcon = document.getElementById('spinnerSvg')
const spinnerP = document.getElementById('spinnerP')
const payMent = document.querySelector('.payment-ready')


//Elementos del form del layout Factura
const btnCrearFactura = document.getElementById('btnCrearFactura')
const nombreCliente = document.getElementById('nombreCliente')
const apellidoCliente = document.getElementById('apellidoCliente')
const emailCliente = document.getElementById('emailCliente')
const telefonoCliente = document.getElementById('telefonoCliente')
const cedulaCliente = document.getElementById('inputCI')
const payContainer = document.getElementById('payContainer')
const payLoading = document.getElementById('payLoading')


//Elementos dentro del spinner
const lucky = document.getElementById('lucky') //Este es el contenedor del spiner (tiene el animation)
const checkSpinner = document.getElementById('checkSpinner')
const textSpinner = document.getElementById('textSpinner')
const buttonSpinner = document.getElementById('buttonSpinner')

//Input Cliente Add
const clienteIdTop = document.getElementById('clienteIDTop')
const inputId = document.getElementById('clienteID')
const inputNombre = document.getElementById('clienteNombre')
const inputApellido = document.getElementById('clienteApellido')
const inputEmail = document.getElementById('clienteEmail')

//Input Plan add
const inputPlanIdTop = document.getElementById('planIDTop')
const inputPlanId = document.getElementById('planID')
const inputPlanNombre = document.getElementById('planNombre')
const inputPlanTipo = document.getElementById('planTipo')
const inputPlanPrecio = document.getElementById('planPrecio')

//Direcciones REST GET
let getClientes = 'http://localhost:9099/api/clientes/listarClientes'
let getPlanes = 'http://localhost:9099/api/planes/listarPlanes'
let getSuscripciones = 'http://localhost:9099/api/suscripciones/listarSuscripciones'
let getHistorial = 'http://localhost:9099/api/historial/listarHistorial'
let getFactura = 'http://localhost:9099/api/factura/listarFactura'
let getIngresosPlan = 'http://localhost:9099/api/sp/ingresosPlan'
let getSuscripcionPlan = 'http://localhost:9099/api/sp/suscripcionesPlan'

//Direcciones REST GET ID
const inputTable = document.getElementById('inputTable')
let getClientesId ='http://localhost:9099/api/clientes/leerID/'