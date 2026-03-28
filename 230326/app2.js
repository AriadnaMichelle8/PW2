let productos = [
{nombre: 'camisa', precio : 300},
{nombre: 'pantalon', precio : 550},
{nombre: 'zapatos', precio : 750},
{nombre: 'sombreros', precio : 550},

];
let carrito = [];
function mostrarMenu(){
    let menu = "Seleccione un producto para agregar al carrito";
    for(let i=0;productos.length; i++){
        menu += (i+1)+ ".-" + productos[i].nombre + "- $"+ productos[1],precio+\n
    }
}

function agregarAlCarrrito(index){
    let productosSeleccionados = productos [index]
}

let opcion;
do{
    opcion = prompt(mostrarMenu()); 
    opcion = Number(opcion);
    //Verificar si la opcion es valida
    if(isNaN(opcion) || opcion<1 || opcion>productos.length+2){
        console.log("Opcion no valida, intentelo de nuevo")
    }else if(opcion >=1 && opcionn <= productos.length){
        agregarAlCarrrito(opcion-1);
    }else if(opcion === productos.length+1){
        mostrarCarritoTotal();
    }
}while(opcion !== productos.length+2);
console.log("Gracias por su compra")