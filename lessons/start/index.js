import { pintarPersonaje } from '../functions/index.js'
let intervalo

export function initMap() {
    map.width = 620
    map.height = 400

    intervalo = setInterval(pintarPersonaje, 50)
}

export{intervalo}

