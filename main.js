//machine turn
const $listaBotones = document.querySelectorAll('.botones');
const $jugadaBot = $listaBotones[Math.floor(Math.random() * $listaBotones.length)];
const secuenciaBot = [];
secuenciaBot.push($jugadaBot);

secuenciaBot.forEach(function(movimientoBot){
    resaltarBoton(movimientoBot)
})

function resaltarBoton(movimientoBot){
    movimientoBot.style.filter = 'brightness(100%)';
    setTimeout(function() {
        movimientoBot.style.filter = 'brightness(40%)';
        }, 500);
    }  
