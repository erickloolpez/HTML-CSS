package geos

class ParroquiaController {

    /*
    * Muestra los cantones de la provincia */

    def list() {
        println "llega a lista de parroquias: $params"
//        def cantones = Canton.list([sort: 'nombre'])
        def canton = Canton.get(params.id)
        def parroquias = Parroquia.findAllByCanton(canton, [sort: 'nombre'])//Ver que este campo exista en la base de datos antes.
        println "parroquias: $parroquias de cntn: ${canton?.id}"
        return[parroquias: parroquias, canton: canton?.id]
    }

    def form_ajax(){
        println "llega form_ajax de parroquias: $params"
        def parroquia
        def canton = Canton.get(params.cntn)

        println "Se va a crear un parroquia del canton: $canton"

        if(params.id){
            parroquia = Parroquia.get(params.id)
        }else{
            parroquia = new Parroquia()
        }

        return[parroquia:parroquia , canton: params.cntn]//Aqui ocurria el error porque teniamos en el form un campo numero que no existe en porroquia
    }

    def save_ajax(){
        println "guarda parroquias: $params"
        def parroquia
        def canton = Canton.get(params.cntn)

        if(params.id){
            parroquia = Parroquia.get(params.id)
        }else{
            parroquia = new Parroquia()
            parroquia.canton = canton
        }

        parroquia.properties = params

        println "a grabar: ${parroquia.canton}"
        if(!parroquia.save(flush:true)){
            println("error al guardar la canton " + parroquia.errors)
            render "no"
        }else{
            println "errores: ${parroquia.errors}"
            render "ok"
        }
    }


}
