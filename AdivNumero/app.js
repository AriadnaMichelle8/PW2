// Hecho en clase con el profesor
console.log("---------------------------------")
let numeroMaquina = Math.floor(Math.random()*(10 - 1) + 1);
let numeroUser = parseInt(prompt("Ingresa un numero entre el 1 y el 10"));

let vidas = 3;

while(numeroUser !== numeroMaquina && vidas > 1){
    vidas--;
    numeroUser = parseInt(prompt("Intenta nuevamente"))
}

if(numeroUser === numeroMaquina){
    console.log("Ganaste");
} else {
    console.log("Perdiste, el numero secreto era: " + numeroMaquina);
}