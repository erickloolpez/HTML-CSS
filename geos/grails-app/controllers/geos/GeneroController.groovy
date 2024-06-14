package geos

class GeneroController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def list() {
//        def provincias = Provincia.list().sort{it.nombre}
        def generos = Genero.list([sort: 'nombre'])
//        println "provincias: $provincias"
        return[generos: generos]
    }

    def form_ajax(){
        def genero

        if(params.id){
            genero = Genero.get(params.id)
        }else{
            genero = new Genero()
        }

        return[genero:genero]
    }

    def save_ajax(){
        println "guarda genero: $params"
        def genero

        if(params.id){
            genero = Genero.get(params.id)
        }else{
            genero = new Genero()
        }

        genero.properties = params
        if(!genero.save(flush:true)){
            println("error al guardar el genero " + genero.errors)
            render "no"
        }else{
            println "errores: ${genero.errors}"
            render "ok"
        }
    }

    def show_ajax(){
        def genero = Genero.get(params.id)
        return [genero: genero]

    }

    def delete_ajax(){

        println("Llega $params")

        def genero = Genero.get(params.id)
        println("Borrando $genero")
        if( !genero.delete(flush: true) ){
            render "ok"
        }else{
            render "error: ${genero.error()}"
        }
    }
}
