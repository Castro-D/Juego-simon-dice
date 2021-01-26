let secuenciaBot = [];
let secuenciaHumano = [];
let ronda = 0;
bloquearUsuario()
$botonStart = document.querySelector('button[type=button]')
document.querySelector('button[type=button]').onclick = function(e){
    resetear()
    ronda++
    actualizarRonda(ronda)
    $botonStart.disabled = true;
    manejarRonda()
} 

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
        $botonStart.disabled = false;
        return;
    }
    if(secuenciaBot.length == secuenciaHumano.length){
        bloquearUsuario();
        secuenciaHumano = [];
        setTimeout(function(){
            ronda++;
            actualizarRonda(ronda);
            manejarRonda();
        }, 1000)
    }
    }
 
function perder(){
    alert('Perdiste.')
    bloquearUsuario()
}

function resetear(){
    secuenciaBot = [];
    secuenciaHumano = [];
    ronda = 0;
}

function manejarEstado(){
}

function bloquearUsuario(){
    document.querySelectorAll('.botones').forEach(function($boton){
        $boton.onclick = function(){
        };
    });

    }

function manejarRonda(){
    const $listaBotones = document.querySelectorAll('.botones');
    const $jugadaBot = $listaBotones[Math.floor(Math.random() * $listaBotones.length)];
    secuenciaBot.push($jugadaBot);

    secuenciaBot.forEach(function(movimientoBot, index){
        const RETRASO_MS = (index + 1) * 1000
        setTimeout(function(){
            resaltarBoton(movimientoBot);
        }, RETRASO_MS)
})
    const RETRASO_TURNO_JUGADOR = (secuenciaBot.length + 1) * 1000
    setTimeout(function(){
        document.querySelectorAll('.botones').forEach(function($boton){
            $boton.onclick = manejarInputUsuario

    })
    
}, RETRASO_TURNO_JUGADOR)
}

function actualizarRonda(ronda){
    document.querySelector('strong').textContent = ronda;

}
