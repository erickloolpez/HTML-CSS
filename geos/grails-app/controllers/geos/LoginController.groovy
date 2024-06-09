package geos

class LoginController {

    def index() {
        redirect(controller: 'login', action: 'login')
    }

    def login() {//se llama a la vista y funciona como un constructor ALVVV
        def usro = session.usuario
        def cn = "inicio"
        def an = "index"
        if (usro) {
            redirect(controller: cn, action: an)//como no existe hace lo del validar del submit
        }
    }

    def validar() {
        println "valida " + params
        println "valida $params"//Es lo mismo de arriba pero de forma concatenada
        def user = Persona.withCriteria {//Esto es consulta en la base de datos.
            eq("login", params.login, [ignoreCase: true])//el input de usuario se llama login
            eq("activo", 1)
            eq( "password", params.pass.toString().encodeAsMD5() )//el input de password se llama pass
        }
        println "usuario: ${user.nombre} pass: ${user.password}"

        def perfil = Sesion.findAllByUsuarioAndFechaFinIsNull(user)//hace un select de la tabla session aja con las caraceteristicas del usuario y la fechaFin sea null
        println "tiene ${perfil.size()}"
        if (perfil.size() > 0) {
//            session.usuario.vaciarPermisos()
            session.usuario = user//Esto es algo que tiene groovy me imagino y decide guardar al usuario ahi
            redirect(controller: 'login', action: "perfiles")//cuando dice controller y action te manda a una view.
            return
        } else {
            flash.message = "No hay perfiles definidos para este usuario"
            redirect(controller: 'login', action: "login")
        }
    }


    def perfiles() {
        def usuarioLog = session.usuario
        def perfilesUsr = Sesion.findAllByUsuarioAndFechaFinIsNull(usuarioLog, [sort: 'perfil'])
        def perfiles = []
        perfilesUsr.each { p ->
            if (p.fechaFin == null) {
                perfiles.add(p.perfil)
            }
        }
        println "---- perfiles ---- ${perfiles} --> ${perfiles.id}"
        return [perfilesUsr: perfiles.sort{it.perfil.descripcion}]
    }

    def savePer() {
        println ("entra en el sistema" + params)
        def prfl = Perfil.get(params.prfl)//Aqui utiliza el name en vez del ID como en validar(), aqui le sobreescribe el valor con lo que llega y por eso en la vista ya vale poner nombre y id.
        if (prfl) {
            session.perfil = prfl//Aqui crea un atributo perfil a session y le asigna el que encontro
            redirect(controller: 'inicio', action: 'index')//nos vamos al controller ahora de inicio y ponemos la vista index
        } else {
            redirect(controller: 'login', action: "login")
        }
    }



    def logout() {
        session.usuario = null
        session.perfil = null
        session.an = null
        session.cn = null
        session.invalidate()

        redirect(controller: 'login', action: 'login')
    }


}