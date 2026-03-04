// Arreglos

// let frutas = ["pera", "manzana", "fresa", "mango", "aguacate"];
// console.log(frutas);

// console.log("--------------------------");
// console.log(frutas.length);
// console.log("----------------------");

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[14]);


// let frutas = ["pera", "manzana", "fresa", "mango", "aguacate"];
// for(let i = 0; i < frutas.length; i ++){
//     console.log(frutas[i]);
// }
// console.log("-----------------------");
// console.log(frutas.length);


// console.log("-----------FOR OF------------");
// for(let fruta of frutas){
//     console.log(fruta);
// }

// console.log("-----------FOR IN------------");
// for(let fruta in frutas){
//     console.log(fruta);
// }

// function Numero(){

// }

// let numeroMaquina = Math.floor(Math.random() * (10-1) + 1);
// console.log(numeroMaquina);

// let NumeroUser = parseInt(prompt("Ingresa un numero entre el 1 y el 10"));
// let vidas= 3;

// while(numeroMaquina !== NumeroUser && vidas > 1){
//     vidas --;
//     NumeroUser = parseInt(prompt("Intenta nuevamente"));
// }

// if(numeroMaquina == NumeroUser){
//     console.log("Ganaste");
// }else {
//     console.log("Perdiste, el numero secreto era: "+numeroMaquina);
// }

//Funciones

function saludar(){
    console.log("Hello kitty");
}

saludar();
function saludar2(nombre){
    console.log("Hola como estas" +nombre);
}
saludar2("Michzzz");

function saludar3(nombre){
    return "Hola Ian" +nombre;
}
console.log(saludar3(" te amo"));