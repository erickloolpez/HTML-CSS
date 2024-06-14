package geos

class Pelicula {
    Genero genero
    String titulo
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
            titulo column: 'plcltitlo'
            nombre column: 'plclnmbre'
            anio_lanzamiento column: 'plclanio'
            duracion column: 'plcldrcn'
            sinopsis column: 'plclsnps'
            imagen column: 'plclimg'
        }
    }
    static constraints = {
        genero(nullable: false)
        titulo(blank: false, size: 1..100)
        nombre(blank: false, size: 1..63)
        anio_lanzamiento(nullable: false, min: 1880) // Año de la primera película conocida.
        duracion(nullable: false, min: 1)
        sinopsis(blank: false, size: 1..500)
        imagen(blank:false)
    }

    String toString() {
        return this.nombre
    }

}