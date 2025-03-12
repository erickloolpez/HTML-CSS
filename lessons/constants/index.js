import { Mascota } from '../models/index.js'
let papel = new Mascota('Papel', "../assets/images/papel.png")
let tijera = new Mascota('Tijera', "../assets/images/tijera.png")
let roca = new Mascota('Roca', "../assets/images/piedra.png")

// Lista de Mascotas
let mascotas = []
let options

//Contenedor Principal
const container = document.querySelector('.container')

//Canvas
const map = document.getElementById('map')
let lienzo = map.getContext('2d')
let mokemap = new Image()
mokemap.src = "../assets/images/pixelMap.jpg"


export { mascotas, options, container, map, lienzo, mokemap, papel, tijera, roca }
