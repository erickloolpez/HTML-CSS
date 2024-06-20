<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="login">
    <title>Peliculas</title>

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

    #gridRoll::-webkit-scrollbar {
        display: none;
    }
    </style>

</head>

<body>

<g:if test="${flash.message}">
    <div class="message" role="status">${flash.message}</div>
</g:if>

<!-- botones -->
<div class="btn-toolbar toolbar" style="width:100%;height:10%;display:flex; justify-content:space-between; align-items:center">
    <div>
        <div class="btn-group">
            %{--<g:link controller="inicio" action="index" class="btn btn-secondary">--}%
            <a href="#" class="btn btn-secondary btn-regresar">
                <i class="fa fa-arrow-left"></i> Regresar
            </a>
            %{--</g:link>--}%
        </div>
        <div class="btn-group">
            <a href="#" class="btn btn-primary btnCrear">
                <i class="fa fa-clipboard-list"></i> Nueva Pelicula
            </a>
        </div>
    </div>
    <div>
        <h2 style="color:white; margin-right:20px">Peliculas de ${generoCompleto.nombre}</h2>
    </div>
</div>

<div id="gridContainer" style="width:100%; height:90%;display:grid; grid-template-columns:100%;grid-template-rows:100%;">
    <div style="width:100%; height:100%; overflow:auto" id="gridRoll">
        <table class="table table-condensed table-bordered table-striped table-hover" style="margin:0px; margin-bottom:0px;width:100%; height:100%">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Sinopsis</th>
                <th>Duracion</th>
                <th>Anio</th>
            </tr>
            </thead>
            <tbody style="background-color:white;">
            <g:if test="${peliculas.size() > 0}">
                <g:each in="${peliculas}" var="pelicula">
                    <tr data-id="${pelicula?.id}">
                        <td style="width:16%">${pelicula?.id}</td>
                        <td style="width:16%">${pelicula?.nombre}</td>
                        <td style="width:16%"><img src="${pelicula?.imagen}" style="width:100%" /></td>
                        <td style="width:16%">${pelicula?.sinopsis}</td>
                        <td style="width:16%">${pelicula?.duracion}</td>
                        <td style="width:16%">${pelicula?.anio_lanzamiento}</td>
                    </tr>
                </g:each>
            </g:if>
            <g:else>
                <tr class="danger">
                    <td >
                        No se encontraron registros que mostrar
                    </td>
                    <td >
                        No hay
                    </td>
                    <td >
                        Tampoco hay
                    </td>
                    <td >
                        Aqui pior
                    </td>
                    <td >
                        Nel
                    </td>
                    <td >
                        Sigue Intentandolo
                    </td>
                </tr>
            </g:else>
            </tbody>
        </table>

    </div>
    <g:textField name="generoId" maxlength="63" class="form-control input-sm required"
                 value="${genero}" style="display:none;"/>
    <div id="cardContent" style="width:100%; height:100%;display:none;flex-direction:column;">

    </div>
</div>


<script type="text/javascript">
    var id = null;

    //Control del grid *Erick*
    function createForm(id){
        var genero = $('#generoId').val();
        var data = id ? {id: id,gnro:genero} : {gnro:genero};
        $('#gridContainer').css('grid-template-columns','80% 20%')
        $('#cardContent').css('display', 'flex')
        $.ajax({
            type: "POST",
            url: "${createLink(controller: 'pelicula', action:'form_ajax')}/",
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
        var $form = $("#frmPelicula");
        var genero = $('#generoId').val()
        var $btn = $("#dlgCreateEdit").find("#btnSave");
        $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: $form.serialize(),
            success: function (msg) {
                if (msg == 'ok') {
                    $('#gridContainer').css('grid-template-columns','100%')
                    $('#cardContent').css('display', 'none')
                    $('#tableSection').empty()
                    $('#tableSection').css('flex-direction','column')
                    $.ajax({
                        type: "POST",
                        url: "${createLink(controller: 'pelicula', action:'list')}/"+genero,
                        success: function (response) {
                            $('#tableSection').html(response)
                            $.ajax({
                                type: "POST",
                                url: "${createLink(controller: 'login', action:'getPeliculas')}",
                                success: function (response) {
                                    $('#itemMovies').html(response)
                                }
                            });
                        }
                    });
                } else {
                    log("Error al guardar la cantón", "error")
                }
            }
        });
    }


    function deleteRow(itemId) {
        console.log("borra",itemId)
        bootbox.dialog({
            title: "Alerta",
            message: "<i class='fa fa-trash fa-3x pull-left text-danger text-shadow'></i><p>" +
            "¿Está seguro que desea eliminar la pelicula seleccionada? Esta acción no se puede deshacer.</p>",
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
                            url: '${createLink(controller: 'pelicula', action:'delete_ajax')}',
                            data: {
                                id: itemId
                            },
                            success: function (msg) {
                                if (msg == 'ok') {
                                    setTimeout(function () {
                                        location.reload();
                                    }, 300);
                                } else {
                                    log("Error al borrar la pelicula", "error")
                                }
                            }
                        });
                    }
                }
            }
        });
    }

    function createEditRow(id) {
        var title = id ? "Editar" : "Crear";
        var gnro = "${genero}"
        var data = id ? {id: id, gnro: gnro} : {gnro: gnro};
        console.log('data', data, gnro)
        $.ajax({
            type: "POST",
            url: "${createLink(controller: 'pelicula', action:'form_ajax')}",
            data: data,
            success: function (msg) {
                var b = bootbox.dialog({
                    title: title + " Pelicula" ,
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


    $(function () {
        $(".btn-regresar").click(function () {
            var id = $(this).data("id");
            //mostrar la lista de cantones
            %{--location.href = "${createLink(controller: 'canton', action:'list')}/"+id--}%


            $('#gridContainer').css('grid-template-columns','100%')
            $('#cardContent').css('display', 'none')
            $('#tableSection').empty()
            $('#tableSection').css('flex-direction','column')
            $.ajax({
                type: "POST",
                url: "${createLink(controller: 'genero', action:'list')}/"+id,
                success: function (response) {
                    $('#tableSection').html(response)
                }
            });
        });

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
            var id = $(this).data("id");
            deleteRow(id);
        });

        $(".btn-parroquia").click(function () {
            var id = $(this).data("id");
            //mostrar la lista de cantones
            location.href = "${createLink(controller: 'parroquia', action:'list')}/"+id
        });

        $(".btn-show").click(function () {
            var title = "Ver Provincia";
            var id = $(this).data("id");
            $.ajax({
                type: "POST",
                url: "${createLink(controller: 'canton', action:'show_ajax')}",
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
