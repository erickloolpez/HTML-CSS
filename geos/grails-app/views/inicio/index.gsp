<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="layout" content="main">
    <title>Title</title>
</head>
<body>
<div style="width:100%;height: 87vh; display:grid; place-items:center">
    <div style="width:40%; height:50%;display: flex; flex-direction: column; align-items:center; justify-content:center">
        <h1>Pantalla de inicio del Sistema</h1>
        <div style="margin-top:40px">
            <!--Nos lleva al controlador de provincia y a la vista list-->
            <a href="${createLink(controller: 'provincia', action: 'list')}" type="button" class="btn btn-info"/>
            Provincias</a>

            <!--Nos lleva al controlador de login y a la vista logout-->
            <a href="${createLink(controller: 'login', action: 'logout')}" type="button"
               class="btn btn-info">Salir del Sistema</a>
        </div>
    </div>
</div>
</body>

</html>