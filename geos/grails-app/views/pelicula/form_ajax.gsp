
<div class="modal-contenido" style="width:100%; height:100%;background-color:white;display: flex; flex-direction: column; justify-content:center;align-items:center">
    <g:form class="form-horizontal" name="frmPelicula" role="form" action="save_ajax" method="POST" style="width:100%;height:100%; overflow-y:auto">
    %{--<g:hiddenField name="id" value="${canton?.id}"/>--}%
    %{--<g:hiddenField name="prov" value="${provincia}"/>--}%
        <g:textField name="id" value="${pelicula?.id}" style="display:none;"/>
        <g:textField name="genero" value="${genero}" style="display:none;"/>

    %{--<div class="form-group keeptogether ${hasErrors(bean: canton, field: 'nombre', 'error')} col-md-12">--}%
        <div class="${hasErrors(bean: pelicula, field: 'nombre', 'error')}" style="display:flex; flex-direction:column;">
            <span>
                %{--<span class="row">--}%
                <label for="nombre">
                    %{--<label for="numero" class="col-md-2 control-label">--}%
                    Nombre
                </label>

                <div >
                    %{--<div class="col-md-3">--}%
                    <!--La razon de usar la g en este caso es porque vamos a llenar este valor con una variable del controlador-->

                    <g:textField name="nombre" maxlength="20"
                                 class="form-control input-sm required"
                                 value="${pelicula?.nombre}"/>

                </div>
                <label for="imagen">
                    %{--<label for="numero" class="col-md-2 control-label">--}%
                    Imagen
                </label>

                <div >
                    %{--<div class="col-md-3">--}%
                    <!--La razon de usar la g en este caso es porque vamos a llenar este valor con una variable del controlador-->

                    <g:textField name="imagen" maxlength="600"
                                 class="form-control input-sm required"
                                 value="${pelicula?.imagen}"/>

                </div>

                <label for="sinopsis" >
                    %{--<label for="nombre" class="col-md-1 control-label">--}%
                    Sinopsis
                </label>

                <div >
                    %{--<div class="col-md-5" style="margin-left: 20px">--}%
                    <!--La razon de usar la g en este caso es porque vamos a llenar este valor con una variable del controlador-->

                    %{--<g:textField name="descripcion" maxlength="63" class="form-control input-sm required"--}%
                    %{--value="${genero?.descripcion}"/>--}%
                    <g:textArea name="sinopsis" maxlength="200"
                                class="form-control input-sm required"
                                value="${pelicula?.sinopsis}"/>

                </div>
                <label for="duracion">
                    %{--<label for="numero" class="col-md-2 control-label">--}%
                    Duracion
                </label>

                <div >
                    %{--<div class="col-md-3">--}%
                    <!--La razon de usar la g en este caso es porque vamos a llenar este valor con una variable del controlador-->

                    <g:textField name="duracion" maxlength="20"
                                 class="form-control input-sm required"
                                 value="${pelicula?.duracion}"/>

                </div>
                <label for="anio_lanzamiento">
                    %{--<label for="numero" class="col-md-2 control-label">--}%
                    Anio de Lanzamaniento
                </label>

                <div >
                    %{--<div class="col-md-3">--}%
                    <!--La razon de usar la g en este caso es porque vamos a llenar este valor con una variable del controlador-->

                    <g:textField name="anio_lanzamiento" maxlength="4"
                                 class="form-control input-sm required"
                                 value="${pelicula?.anio_lanzamiento}"/>
                    <g:textField name="generoNum" maxlength="63" class="form-control input-sm required"
                                 value="${genero}" style="display:none;"/>

                </div>
                %{--<span class="row">--}%
            </span>
        </div>
    </g:form>
    <div style="width:100%;display:flex; justify-content:space-around" >
        %{--<div class="col-md-12" style="text-align: end">--}%
        <div style="display:flex">
            <button id="cerrar" class="btn btn-primary"> Cancelar</button>
            <button id="grabar" class="btn btn-info" style="margin-left:10px"> Grabar</button>
        </div>

        %{--Obra Mia--}%
        <% if (pelicula?.id) { %>
        <a href="#" data-id="${pelicula?.id}" class="btn btn-danger btn-sm btn-borrar btn-ajax" title="Eliminar">
            <i class="fa fa-trash"></i>
        </a>
        %{--<a href="#" data-id="${pelicula?.id}" class="btn btn-warning btn-sm btn-canton btn-ajax" title="Ingresar cantones">--}%
        %{--<i class="fa fa-file"></i>--}%
        %{--</a>--}%
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
        var nombre = $("#nombre").val();
        var imagen = $("#imagen").val();
        var sinopsis = $("#sinopsis").val();
        var duracion = $("#duracion").val();
        var anio_lanzamiento = parseInt($("#anio").val());
        var genero = $('#generoNum').val();
        %{--var url = "${createLink(controller: 'pelicula', action:'list')}/"+genero--}%
        %{--console.log("validando...", numero)--}%
        %{--var num = parseInt(numero)--}%


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
        submitForm(genero);

        $('#gridContainer').css('grid-template-columns','100%')
        $('#cardContent').css('display', 'none')
        $('#tableSection').empty()
        $('#tableSection').css('flex-direction','column')
//        $('#tableSection').html(response)
    });

    $("#cerrar").click(function () {
        //location.href("${createLink(controller: 'pelicula', action:'list')}")
        $('#gridContainer').css('grid-template-columns','100%')
        $('#cardContent').css('display', 'none')
//        location.reload(true)
    });

    function deleteRow(itemId) {
        var genero = $('#generoNum').val();
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
                            url: '${createLink(controller: 'pelicula', action:'delete_ajax')}',//Aqui no usa una vista que culero.
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
//                                    setTimeout(function () {
//                                        location.reload();
//                                    }, 300);
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
    $(function () {
        $(".btn-borrar").click(function () {
            var id = $(this).data("id");//No entiendo muy bien como toma el valor pero digamos que lo hace bien.
            deleteRow(id);
        });

    });
</script>
