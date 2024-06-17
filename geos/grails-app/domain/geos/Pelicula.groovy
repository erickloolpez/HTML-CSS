package geos

class Pelicula {
    Genero genero
    String nombre
    int anio_lanzamiento
    int duracion
    String sinopsis
    String imagen

    static mapping = {
        table 'plcl'
        cache usage: 'read-write', include: 'non-lazy'
        id column: 'plcl__id'
        id generator: 'identity'
        version false
        columns {
            id column: 'plcl__id'
            genero column: 'gnro__id'
            nombre column: 'plclnmbre'
            anio_lanzamiento column: 'plclanio'
            duracion column: 'plcldrcn'
            sinopsis column: 'plclsnps'
            imagen column: 'plclimg', length:500
        }
    }
    static constraints = {
        genero(nullable: false)
        nombre(blank: false, size: 1..63)
        anio_lanzamiento(nullable: false) // Año de la primera película conocida.
        duracion(nullable: false, min: 1)
        sinopsis(blank: false, size: 1..500)
        imagen(blank:false)
    }

    String toString() {
        return this.nombre
    }

}