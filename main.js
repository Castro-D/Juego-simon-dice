
const $listaBotones = document.querySelectorAll('.botones');
const $jugadaBot = $listaBotones[Math.floor(Math.random() * $listaBotones.length)];
const secuenciaBot = [];
secuenciaBot.push($jugadaBot);

secuenciaBot.forEach(function(movimientoBot){
    resaltarBoton(movimientoBot)
})

const secuenciaHumano = [];
document.querySelectorAll('.botones').forEach(function($boton){
    $boton.onclick = manejarInputUsuario
})

function resaltarBoton(movimientoBot){
    movimientoBot.style.filter = 'brightness(1)';
    setTimeout(function() {
        movimientoBot.style.filter = 'brightness(0.4)';
        }, 500);
    }  

function manejarInputUsuario(e){
    const $boton = e.target;
    resaltarBoton($boton);
    secuenciaHumano.push($boton);
    const botonMaquina = secuenciaBot[secuenciaHumano.length - 1];
    if($boton.id !== botonMaquina.id){
        perder();
        }
    }

function perder(){
    alert('Perdiste.')
}
