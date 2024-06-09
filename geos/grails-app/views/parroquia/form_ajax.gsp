
<div class="modal-contenido">
    <g:form class="form-horizontal" name="frmParroquia" role="form" action="save_ajax" method="POST">
        <g:hiddenField name="id" value="${parroquia?.id}"/>
        <g:hiddenField name="cntn" value="${canton}"/>

        <div class="form-group keeptogether ${hasErrors(bean: parroquia, field: 'nombre', 'error')} col-md-12">
            <span class="row">
                <label for="nombre" class="col-md-1 control-label">
                    Nombre
                </label>

                <!--Hay que poner solo los campos que existen en la base de datos-->

                <div class="col-md-5" style="margin-left: 20px">
                    <g:textField name="nombre" maxlength="63" class="form-control input-sm required"
                                 value="${parroquia?.nombre}"/>
                </div>
            </span>
        </div>
    </g:form>
    <div class="col-md-12" style="text-align: end">
        <button id="cerrar" class="btn btn-primary"> Cancelar</button>
        <button id="grabar" class="btn btn-info"> Grabar</button>
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
        var url = "${createLink(controller: 'parroquia', action:'list')}"
        console.log("validando...", nombre)

        submitForm();
        setTimeout(function () {
            location.reload(true)
        }, 300);

    });

    $("#cerrar").click(function () {
        //location.href("${createLink(controller: 'parroquia', action:'list')}")
        location.reload(true)
    });
</script>