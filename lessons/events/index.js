import { moverAbajo,moverArriba,moverDerecha,moverIzquierda,detenerMovimiento } from "../functions/index.js"

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
    }

})

window.addEventListener('keyup', (e) => {
    detenerMovimiento()
})