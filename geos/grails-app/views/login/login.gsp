<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="login">

    <title>Login</title>

    <style type="text/css">
    .hidden {
        display: none;
    }
    #listMovies::-webkit-scrollbar {
        display: none;
    }
    </style>
</head>

<body>

<div style="width:100%; height:100vh;display:grid;grid-template-columns:12% 88%; grid-template-rows:100%; background-color:#030305"; >
    <div style="background-color:#1C1F29">
        <div style="width:100% ;height:10%; display:flex;justify-content:center; align-items:center; border-bottom:4px #22252D solid">
            <asset:image src="apli/imax.png" style="width:60% ;height:50%;object-fit:contain"/>
        </div>
        <div style="width:100%; height: 50%; border-bottom:4px #22252D solid; display:flex; justify-content:center;align-items: center">
            <ul style="width:80%; height:90%; display:flex; flex-direction: column; justify-content:center;">
                <li style="display:flex; width:100%; align-items:center; gap:8px;margin-bottom:12px">
                    <i class='fa fa-home fa-3x' style='width:14%;color:#ffffff'></i>
                    <a style="color:white;font-weight:bold;font-size:16px">Inicio</a>
                </li>
                <li style="width:100%; height:80%; margin-bottom:12px"  >
                    <div style="width:100%;display:flex; align-items:center; gap:8px">
                        <i class='fa fa-film fa-3x' style='width:14%;color:#ffffff'></i>
                        <a style="color:white;font-weight:bold; font-size:16px">Peliculas</a>
                    </div>
                    <ul style=" height:86%; display:flex; flex-direction: column; justify-content:space-around">
                        <li id="btnAccion" style="color: white; list-style: none;margin-left:42px;font-size:16px;cursor:pointer">Accion</li>
                        <li id="btnFiccion" style="color:white;list-style:none;margin-left:42px;font-size:16px;cursor:pointer">Ciencia Ficcion</li>
                        <li id="btnAmor" style="color:white;list-style:none;margin-left:42px; font-size:16px;cursor:pointer">Amor</li>
                        <li id="btnComedia" style="color:white;list-style:none;margin-left:42px; font-size:16px;cursor:pointer">Comedia</li>
                        <li style="color:white;list-style:none;margin-left:42px; font-size:16px">Mas</li>
                    </ul>
                </li>
                <li style="display:flex; gap:8px; align-items:center">
                    <i class='fa fa-users fa-3x' style='width:14%;color:#ffffff'></i>
                    <p style="color:white;font-weight:bold; font-size:16px;margin:0;padding:0">Comunidad</p>
                </li>
            </ul>
        </div>
        <div style="width:100%; height:30%; display:flex; justify-content:center; align-items:center;border-bottom:4px #22252D solid">
            <ul style="width:80%; height:90%;display: flex; flex-direction:column; justify-content:space-around">
                <li style="display:flex; gap:8px; align-items:center">
                    <i class='fa fa-newspaper fa-3x' style='width:14%;color:#ffffff'></i>
                    <p style="color:white;font-weight:bold;font-size:16px;margin:0; padding: 0">Noticias</p>
                </li>
                <li style="display:flex;gap: 8px;align-items:center">
                    <i class='fa fa-flag fa-3x' style='width:14%;color:#ffffff'></i>
                    <p style="color:white;font-weight:bold; font-size:16px;margin:0; padding:0">Logros</p>
                </li>
                <li style="display:flex; gap:8px;align-items:center">
                    <i class='fa fa-graduation-cap fa-3x' style='width:14%;color:#ffffff'></i>
                    <p style="color:white; font-weight:bold;font-size:16px; margin:0; padding:0">VIP</p>
                </li>
                <li style="display:flex;gap:8px;align-items:center">
                    <i class='fa fa-suitcase fa-3x' style='width:14%;color:#ffffff'></i>
                    <p style="color:white;font-weight:bold;font-size:16px;margin:0;padding:0">Tienda</p>
                </li>
            </ul>
        </div>
        <div style="width:100%; height:10%; display:flex; justify-content:center;align-items:center;" >
            <ul style="width:80%;height:33%;">
                <li style="display:flex; gap:8px;align-items:center">
                    <i class='fa fa-wrench fa-3x' style='width:14%;color:#ffffff'></i>
                    <p style="color:white;font-size:16px;margin:0;padding:0">Configuracion</p>
                </li>
            </ul>
        </div>
    </div>
    <div style="width:100%;height:100%; display:grid;grid-template-columns:85% 15%;grid-template-rows:100%;">
        <div style="width:100%;height:100%; display:flex; flex-direction: column; align-items:end;">
            <div style="width:94%; height:10%;display:flex; align-items:center">
                <div style="display:flex;justify-content:center; align-items:center;width:18%;height:50px; border-radius:30px;margin-left:20px;border:2px solid #0D4A83">
                    <i class='fa fa-search fa-lg' style='color:#ffffff'></i>
                    <input type="text" placeholder="Busqueda" id="inputBusqueda" style="margin-left:12px;width:120px;background-color:transparent;border:none; color:white;outline:none;box-shadow:none";/>
                </div>
            </div>
            <div id="tableSection" style="width:94%; height:55%; display:flex;z-index:1;">
                <div style="width:50%; height:100%">
                    <div style="width:100%; height:25%;display:flex;flex-direction: column;justify-content:end">
                        <h1 style="font-size:72px; color:white; margin:0;padding:0">WALL.E</h1>
                        <div>
                            <p style="margin:0;padding:0;color:white">Animacion / Ciencia Ficcion / Amor</p>
                        </div>
                    </div>
                    <div style="display:flex;width:100%; height:10%;align-items:center">
                        <i class='fa fa-star fa-lg' style='color:#ffc107'></i>
                        <i class='fa fa-star fa-lg' style='color:#ffc107'></i>
                        <i class='fa fa-star fa-lg' style='color:#ffc107'></i>
                        <i class='fa fa-star fa-lg' style='color:#ffc107'></i>
                        <i class='fa fa-star-half fa-lg' style='color:#ffc107'></i>
                        <p style="padding:0;margin:0;color:#0866B8">Score: 8.4</p>
                    </div>
                    <div style="width:100%; height:40%;">
                        <p style="margin:0;padding:0; color:white; display:-webkit-box;-webkit-line-clamp:7;-webkit-box-orient:vertical; overflow:hidden;text-overflow:ellipsis">Ambientada en una galaxia no muy lejana, "WALLE" es una comedia que trata sobre un robot en particular. Tras cientos de años dedicado a hacer las tareas para las que fue construido, WALLE (abreviatura de Waste Allocation Load Lifter Earth-Class) descubre un nuevo objetivo en su vida (además de recoger cachivaches) cuando conoce a una estilosa robot de búsqueda llamada EVE (Extra-terrestrial Vegetation Evaluator). EVE se da cuenta de que WALLE ha dado por casualidad con la clave del futuro del planeta, y regresa inmediatamente al espacio para informar sobre sus descubrimientos a los humanos, que llevan mucho tiempo esperando con impaciencia la noticia de que pueden volver a casa con garantías de seguridad. Mientras tanto, WALLE persigue a EVE por la galaxia.</p>
                    </div>
                    <div style="width:100%; height:25%;display:flex; justify-content:start; gap:30px; align-items:center;">
                        <div style="width:30%; height:40px;border-radius:8px; border:2px solid #0C3760; display:flex;justify-content:center; align-items:center;">
                            <p style="margin:0;padding:0;color:#0866B8;font-weight:bold">COMPRAR</p>
                        </div>
                        <div style="width:30%; height:40px;display:flex;justify-content:center; align-items:center;border-radius:8px; border:2px solid #711342">
                            <i class='fa fa-heart fa-lg' style='color:#F70B65'></i>
                            <p style="margin:0; padding:0;margin-left:8px;color:#F70B65;font-weight:bold">Me gusta</p>
                        </div>
                    </div>

                </div>
                <div style="width:50%;height:100%;">
                    <asset:image src="apli/walle.png" style="width:100% ;height:130%;object-fit:contain; mask-image:linear-gradient(black 80%, transparent)"/>
                </div>
            </div>
            <div style="width:94%; height:35%; display:flex; justify-content:center;z-index:2">
                <div style="width:100%; height:100%;">
                    <div style="width:100%; height:12%; display:flex; align-items:center; ">
                        <h2 style="color:white">Popular</h2>
                        <i id="backBtn" class='fa fa-angle-left fa-2x' style='margin-left:20px;color:#ffffff'></i>
                        <i id="nextBtn" class='fa fa-angle-right fa-2x' style='margin-left:20px;color:#ffffff'></i>
                    </div>
                    <div style="width:100%; height:88%;display:flex; overflow-x:auto" id ="listMovies">
                        <div style="display:flex; gap:30px" id="itemMovies">
                            <g:each in="${peliculas}" var="pelicula">
                                <div style="width:180px; height:90%; margin-top:10px">
                                    <div style="width:100%; height:90%">
                                        <img src="${pelicula.imagen}" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                                    </div>
                                    <div style="width:100%; height:10%; display:flex;align-items: center">
                                        <p style="color: white; margin:0; padding:0">${pelicula.nombre}</p>
                                    </div>
                                </div>
                            </g:each>
                            <div style="width:180px; height:90%; margin-top:10px">
                                <div style="width:100%; height:90%">
                                    <asset:image src="apli/greenBook.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                                </div>
                                <div style="width:100%; height:10%; display:flex;align-items: center">
                                    <p style="color: white; margin:0; padding:0">Green Book</p>
                                </div>
                            </div>
                            <div style="width:180px; height:90%; margin-top:10px">
                                <div style="width:100%; height:90%">
                                    <asset:image src="apli/increibles.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                                </div>
                                <div style="width:100%; height:10%; display:flex;align-items: center">
                                    <p style="color: white; margin:0; padding:0">Increibles 2</p>
                                </div>
                            </div>
                            <div style="width:180px; height:90%; margin-top:10px">
                                <div style="width:100%; height:90%">
                                    <asset:image src="apli/ferdinand.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                                </div>
                                <div style="width:100%; height:10%; display:flex;align-items: center">
                                    <p style="color: white; margin:0; padding:0">Ferdinand</p>
                                </div>
                            </div>
                            <div style="width:180px; height:90%; margin-top:10px">
                                <div style="width:100%; height:90%">
                                    <asset:image src="apli/tunner.jpeg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                                </div>
                                <div style="width:100%; height:10%; display:flex;align-items: center">
                                    <p style="color: white; margin:0; padding:0">Tuner</p>
                                </div>
                            </div>
                            <div style="width:180px; height:90%; margin-top:10px">
                                <div style="width:100%; height:90%">
                                    <asset:image src="apli/home.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                                </div>
                                <div style="width:100%; height:10%; display:flex;align-items: center">
                                    <p style="color: white; margin:0; padding:0">Home</p>
                                </div>
                            </div>
                            <div style="width:180px; height:90%; margin-top:10px">
                                <div style="width:100%; height:90%">
                                    <asset:image src="apli/alone.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                                </div>
                                <div style="width:100%; height:10%; display:flex;align-items: center">
                                    <p style="color: white; margin:0; padding:0">Alone at Night</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div style="width: 100%;height:100%">
            <div style="width:100%; height:10%; border-bottom:4px solid #22252D; display:flex; justify-content:center; align-items:center">
                <a href="#" id="ingresar" class="btn btn-info"
                   style="width: 60px; height:60px;border-radius:50%; display:flex;align-items:center;justify-content:center">
                    <i class="fas fa-user fa-2x" style="color:#ffffff"></i>
                </a>
                <p style="color:white; margin:0;padding:0;margin-left:8px">Iniciar Sesion</p>
            </div>
            <div style="width:100%; height:80%; background-color:#1C1F29; display:flex;flex-direction:column;align-items:center;gap:30px">
                <div style="width:80% ;height:120px; margin-top:10px">
                    <asset:image src="apli/walleOne.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                </div>
                <div style="width:80% ;height:120px; margin-top:10px">
                    <asset:image src="apli/walleTwo.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                </div>
                <div style="width:80% ;height:120px; margin-top:10px">
                    <asset:image src="apli/walleThree.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                </div>
                <div style="width:80% ;height:120px; margin-top:10px">
                    <asset:image src="apli/walleFour.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                </div>
                <div style="width:80% ;height:120px; margin-top:10px">
                    <asset:image src="apli/walleFive.jpg" style="width:100% ;height:100%;object-fit:cover;border-radius:8px"/>
                </div>

            </div>
            <div style="width:100%; height:10%;display:flex;justify-content: center; align-items:center;background-color:#1C1F29">
                <div style="width:40%; height:40%; border-radius: 8px; border:2px solid #0C3760;display:flex;justify-content:center;align-items:center">
                    <p style="margin:0;padding:0;color:#0866B8">MAS</p>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>

            </div>
            <h4 class="modal-title" style="text-align: center">Ingresar al Sistema</h4>
            <div class="modal-body">

            <!-- El form tiene el action (Si tienes estas g significa que usa cosas del groovy) -->
            <!-- Cuando solo dice action es que va usar cosas del controlador-->
                <g:form name="frmLogin" action="validar" style="padding: 10px">
                    <div class="row">
                        <div class="col-md-5" style="text-align: right">
                            <label class="col-md-5" for="login">Usuario</label>
                        </div>

                        <div class="col-md-5 controls">
                            <input name="login" id="login" type="text" class="form-control required"
                                   placeholder="Usuario" required autofocus >
                        </div>
                    </div>

                    <div class="row" style="margin-top: 20px; text-align: right">
                        <label class="col-md-5" for="pass">Contraseña</label>

                        <div class="controls col-md-5">
                            <input name="pass" id="pass" type="password" class="form-control required"
                                   placeholder="Contraseña" required style="width: 160px;">
                        </div>
                    </div>

                    <div class="divBtn" style="width: 100%; margin-top: 20px">
                        <a href="#" class="btn btn-primary btn-lg btn-block" id="btn-login"
                           style="width: 140px; margin: auto">
                            <i class="fa fa-lock"></i> Validar
                        </a>
                    </div>

                </g:form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" id="btnCerrar">Cerrar</button>
            </div>
        </div>

    </div>
</div>



<script type="text/javascript">
    var $frm = $("#frmLogin");
    var recargar = true

    var scrollContainer = document.getElementById('listMovies')
    var backBtn = document.getElementById('backBtn')
    var nextBtn = document.getElementById('nextBtn')


    scrollContainer.addEventListener('wheel',function(evt){
        evt.preventDefault()
        scrollContainer.scrollLeft += evt.deltaY
        scrollContainer.style.scrollBehavior='auto'
    })


    $(document).on('click', '#nextBtn', function() {
        scrollContainer.style.scrollBehavior = 'smooth'
        scrollContainer.scrollLeft += 900
    });

    $(document).on('click', '#backBtn', function() {
        scrollContainer.style.scrollBehavior = 'smooth'
        scrollContainer.scrollLeft -= 900
    });

    function doLogin() {
        %{--var usuario = $("#login").val();--}%
        %{--console.log('usuario', usuario);--}%
        %{--if (usuario) {--}%
        %{--$("#cargando").removeClass('hidden');//document.querySelector(#cargando").classList.remove('hidden')--}%
        %{--$(".btn-login").replaceWith($("#cargando"));//document.querySelector('.btn-login').replaceWith(document.querySelector('#cargando'))--}%

        %{--$('#tableSection').empty()--}%
        %{--$.ajax({--}%
        %{--type: "POST",--}%
        %{--url: "${createLink(controller: 'provincia', action:'list')}",--}%
        %{--success: function (response) {--}%
        %{--$('#tableSection').html(response)--}%
        %{--$("#frmLogin").submit();--}%
        %{--}--}%
        %{--});--}%
        %{--}--}%
        event.preventDefault(); // Previene el envío del formulario

        var usuario = $("#login").val();
        console.log('usuario', usuario);
        if (usuario) {
            $("#cargando").removeClass('hidden');
            $(".btn-login").replaceWith($("#cargando"));

            $('#tableSection').empty()
            $('#tableSection').css('flex-direction','column')
            $.ajax({
                type: "POST",
                url: "${createLink(controller: 'login',action:'validar')}", // Cambia esto a la URL de tu método 'validar'
                data: $("#frmLogin").serialize(), // Envia los datos del formulario
                success: function (response) {
                    console.log('Respuesta de Validar:',response)
                    $.ajax({
                        type: "POST",
                        %{--url: "${createLink(controller: 'provincia', action:'list')}",--}%
                        url: "${createLink(controller: 'genero', action:'list')}",
                        success: function (response) {
                            $('#tableSection').html(response)
                        }
                    });
                }
            });
        }
    }


    $(function () {

        $("#ingresar").click(function () {
            var initModalHeight = $('#modal-ingreso').outerHeight();
            $("#modalBody").css({'margin-top': ($(document).height() / 2 - 135)}, {'margin-left': $(window).width() / 2});
            $("#modal-ingreso").modal('show');
            setTimeout(function () {
                $("#login").focus();
            }, 500);

        });

        $("#btnOlvidoPass").click(function () {
            $("#recuperarPass-dialog").modal("show");
            $("#modal-ingreso").modal("hide");
        });

        // $frm.validate();
        $("#btn-login").click(function () {
            console.log('hace Login');
            doLogin();
        });

        $("#btn-pass").click(function () {
            doPass();
        });

//        $("input").keyup(function (ev) {//document.querySelectorAll('input').
//            if (ev.keyCode == 13) {
//                doLogin();
//            }
//        })

        // window.onload = timedRefresh(5000);
        $('#ingresar').on( "click", function() {
            $('#myModal').modal('show');
        });

        $('#btnCerrar').on( "click", function() {
            console.log('cerrar');
        });

        $('#inputBusqueda').keyup(function(e){
            if(e.keyCode == 13){
                var criterio = $("#inputBusqueda").val()
                %{--location.href = "${createLink(action:'buscar')}" + "?crit=" + criterio--}%

                $('#gridContainer').css('grid-template-columns','100%')
                $('#cardContent').css('display', 'none')
                $('#tableSection').empty()
                $('#tableSection').css('flex-direction','column')
                $.ajax({
                    type: "POST",
                    %{--url: "${createLink(controller: 'provincia', action:'list')}",--}%
                    url: "${createLink(controller: 'pelicula', action:'listSearch')}"+"?crit="+criterio,
                    success: function (response) {
                        $('#tableSection').html(response)
                    }
                });
            }
        })

        $('#btnAccion').on('click',function(){
            var id = 1
            getMoviesByGender(id)
        })
        $('#btnFiccion').on('click',function(){
            var id = 34
            getMoviesByGender(id)
        })
        $('#btnAmor').on('click',function(){
            var id = 35
            getMoviesByGender(id)
        })
        $('#btnComedia').on('click',function(){
            var id = 36
            getMoviesByGender(id)
        })

        function getMoviesByGender(id){
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
        }

    });

</script>

</body>
</html>