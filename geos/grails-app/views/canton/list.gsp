<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="login">
    <title>Cantones</title>

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
            <i class="fa fa-clipboard-list"></i> Nuevo Cantón
        </a>
    </div>
</div>

<div id="gridContainer" style="width:100%; height:50vh;display:grid; grid-template-columns:100%;grid-template-rows:100%; background-color:blue;">
    <table class="table table-condensed table-bordered table-striped table-hover">
        <thead>
        <tr>
            <th>Id</th>
            <th>Número</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <g:if test="${cantones.size() > 0}">
            <g:each in="${cantones}" var="canton">
                <tr data-id="${canton?.id}">
                    <td>${canton?.id}</td>
                    <td>${canton?.numero}</td>
                    <td>${canton?.nombre}</td>
                    <td>
                        <a href="#" data-id="${canton?.id}" class="btn btn-success btn-sm btn-edit btn-ajax"
                           title="Editar">
                            <i class="fa fa-edit"></i>
                        </a>
                        <a href="#" data-id="${canton?.id}" class="btn btn-danger btn-sm btn-borrar btn-ajax"
                           title="Eliminar">
                            <i class="fa fa-trash"></i>
                        </a>
                        <a href="#" data-id="${canton?.id}" class="btn btn-info btn-sm btn-show btn-ajax"
                           title="Ver Cantón">
                            <i class="fa fa-search"></i>
                        </a>
                        <a href="#" data-id="${canton?.id}"
                           class="btn btn-warning btn-sm btn-parroquia btn-ajax"
                           title="Ver Porroquia">
                            <i class="fa fa-search"></i>
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
    <g:textField name="provinciaId" maxlength="63" class="form-control input-sm required"
                 value="${provincia}" style="display:none;"/>
    <div id="cardContent" style="width:100%; height:100%;display:none;background-color:red;flex-direction:column;">

    </div>
</div>


<script type="text/javascript">
    var id = null;

    //Control del grid *Erick*
    function createForm(id){
        var provincia = $('#provinciaId').val();
        var data = id ? {id: id,prov:provincia} : {prov:provincia};
        $('#gridContainer').css('grid-template-columns','80% 20%')
        $('#cardContent').css('display', 'flex')
        $.ajax({
            type: "POST",
            url: "${createLink(controller: 'canton', action:'form_ajax')}/",
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
        var $form = $("#frmCanton");
        var provincia = $('#provinciaId').val()
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
                        url: "${createLink(controller: 'canton', action:'list')}/"+provincia,
                        success: function (response) {
                            $('#tableSection').html(response)
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
            "¿Está seguro que desea eliminar la cantón seleccionado? Esta acción no se puede deshacer.</p>",
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
                            url: '${createLink(controller: 'canton', action:'delete_ajax')}',
                            data: {
                                id: itemId
                            },
                            success: function (msg) {
                                if (msg == 'ok') {
                                    setTimeout(function () {
                                        location.reload();
                                    }, 300);
                                } else {
                                    log("Error al borrar la cantón", "error")
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
        var prov = "${provincia}"
        var data = id ? {id: id, prov: prov} : {prov: prov};
        console.log('data', data, prov)
        $.ajax({
            type: "POST",
            url: "${createLink(controller: 'canton', action:'form_ajax')}",
            data: data,
            success: function (msg) {
                var b = bootbox.dialog({
                    title: title + " Cantón" ,
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