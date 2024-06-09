<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main">
    <title>Provincias</title>

    <style type="text/css">
    input:invalid {
        border: 2px dashed red; !important;
    }

    input:invalid:required {
        background-image: linear-gradient(to right, pink, lightgreen);
    }

    input:valid {
        border: 2px solid black;
    }
    </style>

</head>

<body>

<g:if test="${flash.message}">
    <div class="message" role="status">${flash.message}</div>
</g:if>

<!-- botones -->
<div class="btn-toolbar toolbar">
    <div class="btn-group">
        <g:link controller="inicio" action="index" class="btn btn-secondary">
            <i class="fa fa-arrow-left"></i> Regresar
        </g:link>
    </div>

    <div class="btn-group">
        <a href="#" class="btn btn-primary btnCrear">
            <i class="fa fa-clipboard-list"></i> Nueva Provincia
        </a>
    </div>
</div>

<div id="gridContainer" style="width:100%; height:50vh;display:grid; grid-template-colums:100%;grid-template-rows:100%; background-color:blue;">
    <table class="table table-condensed table-bordered table-striped table-hover">
        <thead>
        <tr>
            <th>Id</th>
            <th>Número</th>
            <th>Nombre</th>
            <th>Cantones</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <!--Como tiene un return de provincias en el constructor POS AQUI ESTA-->
        <g:if test="${provincias.size() > 0}">
            <g:each in="${provincias}" var="provincia">
                <tr data-id="${provincia?.id}">
                    <td>${provincia?.id}</td>
                    <td>${provincia?.numero}</td>
                    <td>${provincia?.nombre}</td>
                    <td>${geos.Canton.countByProvincia(provincia)}</td>
                    <td>
                        <a href="#" data-id="${provincia?.id}" class="btn btn-success btn-sm btn-edit btn-ajax"
                           title="Editar">
                            <i class="fa fa-edit"></i>
                        </a>
                        <a href="#" data-id="${provincia?.id}" class="btn btn-danger btn-sm btn-borrar btn-ajax"
                           title="Eliminar">
                            <i class="fa fa-trash"></i>
                        </a>
                        <a href="#" data-id="${provincia?.id}" class="btn btn-info btn-sm btn-show btn-ajax"
                           title="Ver Provincia">
                            <i class="fa fa-search"></i>
                        </a>
                        <a href="#" data-id="${provincia?.id}"
                           class="btn btn-warning btn-sm btn-canton btn-ajax"
                           title="Ingresar cantones">
                            <i class="fa fa-file"></i>
                        </a>
                    </td>
                </tr>
            </g:each>
        </g:if>
        <g:else>
            <tr class="danger">
                <td class="text-center" colspan="2">
                    No se encontraron registros que mostrar
                </td>
            </tr>
        </g:else>
        </tbody>
    </table>
    <div id="cardContent" style="width:100%; height:100%;display:none;background-color:red;flex-direction:column;">

    </div>
</div>


<script type="text/javascript">
    var id = null;

    //Control del grid *Erick*
    function createForm(id){
        var data = id ? {id: id} : {};
        $('#gridContainer').css('grid-template-columns','80% 90%')
        $('#cardContent').css('display', 'flex')
        $.ajax({
            type: "POST",
            url: "${createLink(controller: 'provincia', action:'form_ajax')}",
            data: data,
            success: function (response) {
                $('#cardContent').html(response)
            }
        });
    }


    //Evento al dar click a una de las filas de la tabla *Erick*
    $('tr').click(function(){
        var id=$(this).data('id')
        createForm(id)
    })

    function submitForm() {
        var $form = $("#frmProvincia");//esto esta en el script de form_ajax del create o edit nueva provincia
        var $btn = $("#dlgCreateEdit").find("#btnSave");
        $.ajax({
            type: "POST",
            url: $form.attr("action"),//Aqui realiza la accion de save_ajax()
            data: $form.serialize(),//Coge todos los valores dentro de este form incluido la g que deciamos que pedo con esto
            success: function (msg) {
                if (msg == 'ok') {
                    log("Provincia guardada correctamente", "success");
                    setTimeout(function () {
                        location.reload(true);
                    }, 1000);
                } else {
                    log("Error al guardar la provincia", "error")
                }
            }
        });
    }


    function deleteRow(itemId) {
        console.log("borra",itemId)
        bootbox.dialog({
            title: "Alerta",
            message: "<i class='fa fa-trash fa-3x pull-left text-danger text-shadow'></i><p>" +
            "¿Está seguro que desea eliminar la provincia seleccionada? Esta acción no se puede deshacer.</p>",
            closeButton: false,
            buttons: {
                cancelar: {
                    label: "Cancelar",
                    className: "btn-primary",
                    callback: function () {
                    }
                },
                eliminar: {
                    label: "<i class='fa fa-trash'></i> Eliminar",
                    className: "btn-danger",
                    callback: function () {
                        $.ajax({
                            type: "POST",
                            url: '${createLink(controller: 'provincia', action:'delete_ajax')}',//Aqui no usa una vista que culero.
                            data: {
                                id: itemId//Aqui estan los params
                            },
                            success: function (msg) {
                                if (msg == 'ok') {
                                    setTimeout(function () {
                                        location.reload();
                                    }, 300);
                                } else {
                                    log("Error al borrar la provincia", "error")
                                }
                            }
                        });
                    }
                }
            }
        });
    }

    //Aqui reutiliza el codigo que par crear o para editar un registro
    function createEditRow(id) {
        var title = id ? "Editar" : "Crear";
        var data = id ? {id: id} : {};
        $.ajax({
            type: "POST",
            url: "${createLink(controller: 'provincia', action:'form_ajax')}",
            data: data,//De aqui vienen los params que se usa en el controlador de provinicia
            success: function (msg) {
                var b = bootbox.dialog({//De aqui es lo que sale el modal o esa donde ponemos agregar o editar I GUESS
                    title: title + " Provincia" ,
                    closeButton: false,
                    message: msg,
                }); //dialog
                setTimeout(function () {
                    b.find(".form-control").first().focus()
                }, 500);
            } //successJava
        });
        //location.reload()//ajax
    }

    //createEdit

    $(function () {

        $(".btnCrear").click(function () {
//            createEditRow();
            createForm()
            return false;
        });

        $(".btn-edit").click(function () {
            var id = $(this).data("id");
            createEditRow(id);
        });

        $(".btn-borrar").click(function () {
            var id = $(this).data("id");//No entiendo muy bien como toma el valor pero digamos que lo hace bien.
            deleteRow(id);
        });

        $(".btn-canton").click(function () {
            var id = $(this).data("id");
            //mostrar la lista de cantones
            location.href = "${createLink(controller: 'canton', action:'list')}/"+id
        });

        $(".btn-show").click(function () {
            var title = "Ver Provincia";
            var id = $(this).data("id");
            $.ajax({
                type: "POST",
                url: "${createLink(controller: 'provincia', action:'show_ajax')}",
                data: {id: id},
                success: function (msg) {
                    var b = bootbox.dialog({
                        title: title,
                        closeButton: false,
                        message: msg,
                        buttons: {
                            aceptar: {
                                label: "Aceptar",
                                className: "btn-primary",
                                callback: function () {
                                }
                            }
                        },
                    }); //dialog
                    setTimeout(function () {
                        b.find(".form-control").first().focus()
                    }, 500);
                } //successJava
            });
            //location.reload()//ajax
        });
    });
</script>

</body>
</html>