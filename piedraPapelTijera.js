

var jugador;
var compu;


function juego(compu,jugador) {
    if (compu == "tijera" && jugador == "tijera"|| compu == "piedra" && jugador == "piedra" || compu == "papel" && jugador == "papel") {
        console.log("EMPATE");}
         else if (compu == "tijera" && jugador == "papel" || compu == "papel" && jugador == "piedra" || compu =="piedra" && jugador == "tijera"){
            console.log("PERDISTE");
        }
        else {
            console.log("GANASTE");

        }
    }


