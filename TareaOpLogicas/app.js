
console.log("OPERADOR AND");
console.log("true&&true  =", true && true);
console.log("true&&false =", true && false);
console.log("false&&true  =", false && true);
console.log("false&&false =", false && false);

console.log("OPERADOR OR");
console.log("true||true  =", true || true);
console.log("true||false =", true || false);
console.log("false||true  =", false || true);
console.log("false||false =", false || false);

var entrada1 = prompt("Ingrese 1 para true o 0 para false");
var entrada2 = prompt("Ingrese 1 para true o 0 para false");

var valor1 = entrada1 === "1";
var valor2 = entrada2 === "1";
var and = valor1 && valor2;
var or = valor1 || valor2;

console.log("Los valores son: " + valor1 + " y " + valor2);
console.log("AND: " + and);
console.log("OR: " + or);
