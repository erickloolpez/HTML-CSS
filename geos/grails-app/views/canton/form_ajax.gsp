
<div class="modal-contenido">
<g:form class="form-horizontal" name="frmCanton" role="form" action="save_ajax" method="POST">
    %{--<g:hiddenField name="id" value="${canton?.id}"/>--}%
    %{--<g:hiddenField name="prov" value="${provincia}"/>--}%
    <g:textField name="id" value="${canton?.id}" style="display:none;"/>
    <g:textField name="prov" value="${provincia}" style="display:none;"/>

%{--<div class="form-group keeptogether ${hasErrors(bean: canton, field: 'nombre', 'error')} col-md-12">--}%
    <div class="${hasErrors(bean: canton, field: 'nombre', 'error')}" style="display:flex; flex-direction:column">
    <span>
        %{--<span class="row">--}%
        <label for="numero">
            %{--<label for="numero" class="col-md-2 control-label">--}%
            Número
        </label>

        <div >
            %{--<div class="col-md-3">--}%
            <g:textField name="numero" maxlength="4"
                         class="form-control input-sm required"
                         value="${canton?.numero}"/>
        </div>

        <label for="nombre">
            %{--<label for="nombre" class="col-md-1 control-label">--}%
            Nombre
        </label>

        <div >
            %{--<div class="col-md-5" style="margin-left: 20px">--}%
            <g:textField name="nombre" maxlength="63" class="form-control input-sm required"
                         value="${canton?.nombre}"/>
            <g:textField name="provinciaNum" maxlength="63" class="form-control input-sm required"
                         value="${provincia}" style="display:none;"/>
        </div>
    </span>
    </div>
</g:form>
<div >
    %{--<div class="col-md-12" style="text-align: end">--}%
    <button id="cerrar" class="btn btn-primary"> Cancelar</button>
    <button id="grabar" class="btn btn-info"> Grabar</button>

    %{--Obra Mia--}%
    <% if (canton?.id) { %>
    <a href="#" data-id="${canton?.id}" class="btn btn-danger btn-sm btn-borrar btn-ajax" title="Eliminar">
        <i class="fa fa-trash"></i>
    </a>
    <a href="#" data-id="${canton?.id}" class="btn btn-warning btn-sm btn-canton btn-ajax" title="Ingresar cantones">
        <i class="fa fa-file"></i>
    </a>
    <% } %>
</div>
</div>

<script type="text/javascript">


    $(".form-control").keydown(function (ev) {
        if (ev.keyCode == 13) {
            console.log("Llama a validar")
            $("#grabar").click()
            return false;
        }
        return true;
    });


    $("#grabar").click(function () {
        var numero = $("#numero").val();
        var nombre = $("#nombre").val();
        var provincia = $('#provinciaNum').val();
        var url = "${createLink(controller: 'canton', action:'list')}/"+provincia
        console.log("validando...", numero)
        var num = parseInt(numero)


//            if(numero >25 || numero<1){
//                bootbox.alert("<i class='fa fa-exclamation-triangle fa-3x pull-left text-warning text-shadow'></i>" +
//                    " Ingrese el número del cantón")
//            }
//            else if (nombre == ''){
//                bootbox.alert("<i class='fa fa-exclamation-triangle fa-3x pull-left text-warning text-shadow'></i>" +
//                    " Ingrese el nombre del cantón")
//            }else{
//                submitForm();
//                setTimeout(function () {
//                    location.reload(true)
//                }, 300);
//            }
        submitForm();

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
    });

    $("#cerrar").click(function () {
        //location.href("${createLink(controller: 'canton', action:'list')}")
        $('#gridContainer').css('grid-template-columns','100%')
        $('#cardContent').css('display', 'none')
//        location.reload(true)
    });

    function deleteRow(itemId) {
        var provincia = $('#provinciaNum').val();
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
                            url: '${createLink(controller: 'canton', action:'delete_ajax')}',//Aqui no usa una vista que culero.
                            data: {
                                id: itemId//Aqui estan los params
                            },
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
//                                    setTimeout(function () {
//                                        location.reload();
//                                    }, 300);
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
    $(function () {
        $(".btn-borrar").click(function () {
            var id = $(this).data("id");//No entiendo muy bien como toma el valor pero digamos que lo hace bien.
            deleteRow(id);
        });

    });
</script>