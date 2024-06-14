package geos

class Genero {
    String nombre
    String descripcion
    static mapping = {
        table 'gnro'
        cache usage: 'read-write', include: 'non-lazy'
        id column: 'gnro__id'
        id generator: 'identity'
        version false
        columns {
            id column: 'gnro__id'
            nombre column: 'gnronmbr'
            descripcion column: 'gnrodscrp'
        }
    }
    static constraints = {
        nombre(size: 1..63, blank: false, nullable: false, attributes: [title: 'nombre'])
        descripcion(size:1..200, blank: false, nullable: false, attributes: [title: 'descripcion'])
    }

    String toString() {
        return this.nombre
    }

}