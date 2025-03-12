import { lienzo } from "../constants/index.js"
import { numAleatorio } from "../functions/index.js"

export class Mascota {
    constructor(nombre, foto) {
        this.nombre = nombre
        this.foto = foto
        this.x = numAleatorio(10, 600)
        this.y = numAleatorio(10, 400)
        this.fotoMapa = new Image()
        this.fotoMapa.src = this.foto
        this.width = 50
        this.height = 50
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarPersonaje() {
        lienzo.drawImage(
            this.fotoMapa,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}
