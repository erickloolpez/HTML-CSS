<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>

    <meta name="layout" content="login">
    <title>Perfil</title>

    <style type="text/css">
    .hidden {
        visibility: hidden;
    }
    </style>
</head>

<body>

<div style="width:100%; height:87vh; display:flex; flex-direction:column; align-items:center; justify-content:space-around" >
    <g:if test="${flash.message}">
        <div class="message" role="status">${flash.message}</div>
    </g:if>

    <h3>Seleccione su perfil de trabajo</h3>

    <div style="width:50%; height:50%;">
        <g:if test="${flash.message}">
            <div class="message" role="status">${flash.message}</div>
        </g:if>

        <!-- Aqui utiliza la accion del controlador de login 'savePer'-->
        <g:form name="frmLogin" action="savePer" class="form-signin well" role="form" style="width:100%; height:100%; display:flex; flex-direction: column; align-items: center; justify-content: space-around">
            <h3>Perfil</h3>
            <!--El perfilUsr te trae del controlador-->
            <g:select name="prfl" class="form-control" style="width:30%" from="${perfilesUsr}" optionKey="id"
                      optionValue="nombre"/>
            <div class="divBtn" style="margin-top: 40px">
                <a href="#" class="btn btn-primary btn-lg btn-block btn-login" id="btnPerfiles" style="width: 140px; margin: auto">
                    <i class="fa fa-lock"></i> Entrar
                </a>
            </div>
        </g:form>
    </div>
    <div id="cargando" class="text-center hidden">
        <img src="${resource(dir: 'images', file: 'spinner32.gif')}" alt='Cargando...' width="32px" height="32px"/>
    </div>
</div>

<script type="text/javascript">
    var $frm = $("#frmLogin");

    function doLogin() {
        $("#cargando").removeClass('hidden');
        $("#btnPerfiles").replaceWith($("#cargando"));
        $("#frmLogin").submit();
    }

    $(function () {
        $("#btnPerfiles").click(function () {//Este el boton que dice entrar
            doLogin();
        });
        $("input").keyup(function (ev) {
            if (ev.keyCode == 13) {
                doLogin();
            }
        })
    });
</script>

</body>
</html>