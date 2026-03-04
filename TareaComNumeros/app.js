var numero1 = parseInt(prompt("Ingresa el numero 1"));
var numero2 = parseInt(prompt("Ingresa el numero 2"));
console.log("Numero 1: " + numero1);
console.log("Numero 2: " + numero2);

if(numero1 > numero2){
    console.log("El numero 1 es mayor que el numero 2");
} else if(numero1 < numero2){
    console.log("El numero 1 es menor que el numero 2");
} else {
    console.log("Los numeros son iguales");
}

console.log("OPERADOR TERNARIO");
var resultado = numero1 > numero2 ? "El numero 1 es mayor que el numero 2" : numero1 < numero2 ?"El numero 1 no es mayor que el numero 2" : "Los numeros son iguales"; 
console.log(resultado);