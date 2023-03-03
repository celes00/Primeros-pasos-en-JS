

 var jugador;
var compu;


function juego(compu,jugador) {
    switch (compu,jugador) {
        case  "tijera" &&  "tijera"|| "piedra" && "piedra" || "papel" &&  "papel":  {
        console.log("EMPATE")
        break;}
         case "tijera" &&  "papel" || "papel" &&  "piedra" || "piedra" &&  "tijera":{
            console.log("PERDISTE")
            break;
        }
        default: {
            console.log("GANASTE");
        }

    }
 }


/*  Otro ejemplo 

var numero = 1

switch(numero) {
    case 1:
        console.log("soy un 1");
        break;
    case 10:
        console.log("soy un 10");
        break;
    case 100:
        console.log("soy un 100");
        break;
    default:
        console.log("No soy nada");
}


*/