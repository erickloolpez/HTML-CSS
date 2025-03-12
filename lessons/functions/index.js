import { papel, lienzo, tijera, roca, mokemap, map, container } from "../constants/index.js"
import { intervalo } from "../start/index.js"

export function moverArriba() {
    papel.velocidadY = -5
}
export function moverDerecha() {
    papel.velocidadX = 5
}
export function moverIzquierda() {
    papel.velocidadX = -5
}
export function moverAbajo() {
    papel.velocidadY = 5
}

export function detenerMovimiento() {
    papel.velocidadX = 0
    papel.velocidadY = 0
}

export function pintarPersonaje() {
    lienzo.clearRect(0, 0, map.width, map.height)
    lienzo.drawImage(
        mokemap,
        0,
        0,
        map.width,
        map.height
    )
    papel.x = papel.x + papel.velocidadX
    papel.y = papel.y + papel.velocidadY

    papel.pintarPersonaje()
    tijera.pintarPersonaje()
    roca.pintarPersonaje()
    revisarColision(tijera)
    revisarColision(roca)
}

export function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function revisarColision(enemigo) {
    const arribaMascota = papel.y
    const abajoMascota = papel.y + papel.height
    const izquierdaMascota = papel.x
    const derechaMascota = papel.x + papel.width

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.height
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.width

    if (
        izquierdaMascota > derechaEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo
    ) {
        return
    }
        detenerMovimiento()
        clearInterval(intervalo)
        container.style.display = "none"
}
