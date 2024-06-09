package geos

class CantonController {

    /*
    * Muestra los cantones de la provincia */
    def list() {
        println "llega a lista de cantones: $params"
//        def cantones = Canton.list([sort: 'nombre'])
        def provincia = Provincia.get(params.id)
        def cantones = Canton.findAllByProvincia(provincia, [sort: 'nombre'])
        println "cantones: $cantones de prov: ${provincia?.id}"
        return[cantones: cantones, provincia: provincia?.id]
    }

    def form_ajax(){
        println "llega form_ajax de canton: $params"
        def canton
        def provincia = Provincia.get(params.prov)

        println "Se va a crear un canton de la provincia: $provincia"

        if(params.id){
            canton = Canton.get(params.id)
        }else{
            canton = new Canton()
        }

        return[canton:canton, provincia: params.prov]
    }

    def save_ajax(){
        println "guarda cantón: $params"
        def canton
        def provincia = Provincia.get(params.prov)

        if(params.id){
            canton = Canton.get(params.id)
        }else{
            canton = new Canton()
            canton.provincia = provincia
        }

        canton.properties = params

        println "a grabar: ${canton.provincia}"
        if(!canton.save(flush:true)){
            println("error al guardar la canton " + canton.errors)
            render "no"
        }else{
            println "errores: ${canton.errors}"
            render "ok"
        }
    }

    def delete_ajax(){

        println("Llega $params")

        def canton = Canton.get(params.id)
        println("Borrando $canton")
        if( !canton.delete(flush: true) ){
            render "ok"
        }else{
            render "error: ${canton.error()}"
        }

    }

}