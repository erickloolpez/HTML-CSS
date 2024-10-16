
<div class="modal-contenido" style="width:100%; height:100%;background-color:white;display: flex; flex-direction: column; justify-content:center">
    <!--Ya sabemos que si tiene esto de la g, es porque usa una accion del controlador-->
    <div style="width:90%; height:90%; display: flex; flex-direction: column; justify-content: space-around">
        <g:form class="form-horizontal" name="frmGenero" role="form" action="save_ajax" method="POST">
            <g:hiddenField name="id" value="${genero?.id}"/><!--Usa la provincia que nos mando en el dialog box de crear o editar provinicia-->

        %{--<div class="form-group keeptogether ${hasErrors(bean: provincia, field: 'nombre', 'error')} col-md-12">--}%
            <div class="${hasErrors(bean: provincia, field: 'nombre', 'error')}" style="display:flex; flex-direction:column;">
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
                                     value="${genero?.nombre}"/>

                    </div>

                    <label for="descripcion" >
                        %{--<label for="nombre" class="col-md-1 control-label">--}%
                        Descripcion
                    </label>

                    <div >
                        %{--<div class="col-md-5" style="margin-left: 20px">--}%
                        <!--La razon de usar la g en este caso es porque vamos a llenar este valor con una variable del controlador-->

                        %{--<g:textField name="descripcion" maxlength="63" class="form-control input-sm required"--}%
                                     %{--value="${genero?.descripcion}"/>--}%
                        <g:textArea name="descripcion" maxlength="200"
                                    class="form-control input-sm required"
                                    value="${genero?.descripcion}"/>

                    </div>
                </span>
            </div>
        </g:form>
        <div >
            %{--<div class="col-md-12" style="text-align: end">--}%
            <button id="cerrar" class="btn btn-primary"> Cancelar</button>
            <button id="grabar" class="btn btn-info"> Grabar</button>

            %{--Obra Mia--}%
            <% if (genero?.id) { %>
            <a href="#" data-id="${genero?.id}" class="btn btn-danger btn-sm btn-borrar btn-ajax" title="Eliminar">
                <i class="fa fa-trash"></i>
            </a>
            <a href="#" data-id="${genero?.id}" class="btn btn-warning btn-sm btn-canton btn-ajax" title="Ingresar cantones">
                <i class="fa fa-file"></i>
            </a>
            <% } %>
        </div>

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
        var descripcion = $("#descripcion").val();
        %{--var url = "${createLink(controller: 'provincia', action:'list')}"--}%
        %{--console.log("validando...", nombre)--}%
        %{--var num = parseInt(numero)--}%


        %{--if(numero >25 || numero<1){--}%
            %{--bootbox.alert("<i class='fa fa-exclamation-triangle fa-3x pull-left text-warning text-shadow'></i>" +--}%
                %{--" Ingrese el número de la provincia")--}%
        %{--}--}%
        %{--else if (nombre == ''){--}%
            %{--bootbox.alert("<i class='fa fa-exclamation-triangle fa-3x pull-left text-warning text-shadow'></i>" +--}%
                %{--" Ingrese el nombre de la provincia")--}%
        %{--}else{--}%


            //USA EL SUBMIT FORM DE LIST porque como es javascript es global el pedo que desorden dio mio.
            submitForm();
            //$(".modal-dialog").hide()
//            setTimeout(function () {
//                location.reload(true)
//            }, 300);
            //location.reload(true)

            $('#gridContainer').css('grid-template-columns','100%')
            $('#cardContent').css('display', 'none')
            $('#tableSection').empty()
            $('#tableSection').css('flex-direction','column')
            %{--$.ajax({--}%
                %{--type: "POST",--}%
                %{--url: "${createLink(controller: 'genero', action:'list')}",--}%
                %{--success: function (response) {--}%
                    %{--$('#tableSection').html(response)--}%
                %{--}--}%
            %{--});--}%
//        }

    });

    $("#cerrar").click(function () {
        //location.href("${createLink(controller: 'genero', action:'list')}")
        $('#gridContainer').css('grid-template-columns','100%')
        $('#cardContent').css('display', 'none')
//        location.reload(true)
    });

    //Obra Mia
    function deleteRow(itemId) {
        console.log("borra",itemId)
        bootbox.dialog({
            title: "Alerta",
            message: "<i class='fa fa-trash fa-3x pull-left text-danger text-shadow'></i><p>" +
            "¿Está seguro que desea eliminar el genero seleccionado? Esta acción no se puede deshacer.</p>",
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
                            url: '${createLink(controller: 'genero', action:'delete_ajax')}',//Aqui no usa una vista que culero.
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
                                        url: "${createLink(controller: 'genero', action:'list')}",
                                        success: function (response) {
                                            $('#tableSection').html(response)
                                        }
                                    });
//                                    setTimeout(function () {
//                                        location.reload();
//                                    }, 300);
                                } else {
                                    log("Error al borrar el genero", "error")
                                }
                            }
                        });
                    }
                }
            }
        });
    }

    $(function () {
        $(".btn-canton").click(function () {
            var id = $(this).data("id");
            //mostrar la lista de cantones
            %{--location.href = "${createLink(controller: 'canton', action:'list')}/"+id--}%


            $('#gridContainer').css('grid-template-columns','100%')
            $('#cardContent').css('display', 'none')
            $('#tableSection').empty()
            $('#tableSection').css('flex-direction','column')
            $.ajax({
                type: "POST",
                url: "${createLink(controller: 'pelicula', action:'list')}/"+id,
                success: function (response) {
                    $('#tableSection').html(response)
                }
            });
        });

        $(".btn-borrar").click(function () {
            var id = $(this).data("id");//No entiendo muy bien como toma el valor pero digamos que lo hace bien.
            deleteRow(id);
        });

    });
</script>