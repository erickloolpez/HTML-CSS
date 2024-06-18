package geos

class PeliculaController {

    /*
    * Muestra los cantones de la provincia */
    def list() {
        println "llega a lista de peliculas: $params"
//        def cantones = Canton.list([sort: 'nombre'])
        def genero = Genero.get(params.id)
        def peliculas = Pelicula.findAllByGenero(genero, [sort: 'nombre'])
        println "peliculas: $peliculas del genero: ${genero?.id}"
        return[peliculas: peliculas, genero: genero?.id, generoCompleto: genero]
    }

    def form_ajax(){
        println "llega form_ajax de pelicula: $params"
        def pelicula
        def genero = Genero.get(params.gnro)

        println "Se va a crear una pelicula del genero: $genero"

        if(params.id){
            pelicula = Pelicula.get(params.id)
        }else{
            pelicula = new Pelicula()
        }

        return[pelicula:pelicula, genero: params.gnro]
    }

    def save_ajax(){
        println "guarda pelicula: $params"
        def pelicula
        def genero = Genero.get(params.gnro)

        if(params.id){
            pelicula = Pelicula.get(params.id)
        }else{
            pelicula = new Pelicula()
            pelicula.genero = genero
        }

        pelicula.properties = params

        println "a grabar: ${pelicula.genero}"
        if(!pelicula.save(flush:true)){
            println("error al guardar la pelicula " + pelicula.errors)
            render "no"
        }else{
            println "errores: ${pelicula.errors}"
            render "ok"
        }
    }

    def delete_ajax(){

        println("Llega $params")

        def pelicula = Pelicula.get(params.id)
        println("Borrando $pelicula")
        if( !pelicula.delete(flush: true) ){
            render "ok"
        }else{
            render "error: ${pelicula.error()}"
        }

    }
}
