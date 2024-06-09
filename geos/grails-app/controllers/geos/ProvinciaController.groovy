package geos

import grails.validation.ValidationException

import static org.springframework.http.HttpStatus.*

class ProvinciaController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def list() {
//        def provincias = Provincia.list().sort{it.nombre}
        def provincias = Provincia.list([sort: 'nombre'])
//        println "provincias: $provincias"
        return[provincias: provincias]
    }

    def form_ajax(){
        def provincia

        if(params.id){
            provincia = Provincia.get(params.id)
        }else{
            provincia = new Provincia()
        }

        return[provincia:provincia]
    }

    def save_ajax(){
        println "guarda provincia: $params"
        def provincia

        if(params.id){
            provincia = Provincia.get(params.id)
        }else{
            provincia = new Provincia()
        }

        provincia.properties = params
        if(!provincia.save(flush:true)){
            println("error al guardar la provincia " + provincia.errors)
            render "no"
        }else{
            println "errores: ${provincia.errors}"
            render "ok"
        }
    }

    def show_ajax(){
        def provincia = Provincia.get(params.id)
        return [provincia: provincia]

    }

    def delete_ajax(){

        println("Llega $params")

        def provincia = Provincia.get(params.id)
        println("Borrando $provincia")
        if( !provincia.delete(flush: true) ){
            render "ok"
        }else{
            render "error: ${provincia.error()}"
        }

    }

}