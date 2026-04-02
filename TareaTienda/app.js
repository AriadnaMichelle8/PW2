let articulos = [
    {nombre: "camisa", precio: 300, cantidad: 5},
    {nombre: "pantalon", precio: 550, cantidad: 5},
    {nombre: "zapatos", precio: 750, cantidad: 3},
    {nombre: "sombrero", precio: 550, cantidad: 3}
];
let carrito = [];
let opcion;

do {
    opcion = prompt(mostrarMenu());
    opcion = parseInt(opcion);

    if (isNaN(opcion) || opcion < 1 || opcion > articulos.length + 5) {
        console.log("Opción inválida, ingrese una nueva opción");
    } else if (opcion >= 1 && opcion <= articulos.length) {
        agregarCarrito(articulos[opcion - 1]);
    } else if (opcion === articulos.length + 1) {
        agregarArticuloNuevo();
    } else if (opcion === articulos.length + 2) {
        mostrarCarritoTotal();
    } else if (opcion === articulos.length + 3) {
        eliminarDelCarrito();
    }
} while (opcion !== articulos.length + 4);

console.log("Gracias por comprar");

function mostrarMenu() {
    let menu = "¿Qué artículo desea agregar?\nArtículos:\n";
    for (let i = 0; i < articulos.length; i++) {
        menu += (i + 1) + ".- " + articulos[i].nombre + " - $" + articulos[i].precio + " - cantidad: " + articulos[i].cantidad + "\n";
    }

    menu += `\n${articulos.length + 1}- Agregar artículo\n`;
    menu += `${articulos.length + 2}- Mostrar total del carrito\n`;
    menu += `${articulos.length + 3}- Eliminar artículo del carrito\n`;
    menu += `${articulos.length + 4}- Salir\n`;
    return menu;
}

function agregarCarrito(articulo) {
    let nombre = articulo.nombre;
    let precio = articulo.precio;
    let cantidad = prompt("¿Cuántos artículos quieres llevar?");
    cantidad = parseInt(cantidad);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Valores no válidos, por favor vuelva a intentarlo");
    } else if (cantidad <= articulo.cantidad) {
        articulo.cantidad -= cantidad;
        let articuloNuevo = {nombre: nombre, precio: precio, cantidad: cantidad};
        carrito.push(articuloNuevo);
        console.log(`Se agregaron ${cantidad} artículos de ${articulo.nombre} al carrito`);
    } else {
        alert("No hay suficientes artículos, intente con una cantidad menor");
    }
}

function mostrarCarritoTotal() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
    } else {
        let carritoMensaje = "Artículos en el carrito:\n";
        let total = 0;
        let totalArticulo = 0;
        for (let i = 0; i < carrito.length; i++) {
            totalArticulo = carrito[i].precio * carrito[i].cantidad;
            carritoMensaje += (i + 1) + ".- " + carrito[i].cantidad + "x " + carrito[i].nombre + " - $" + totalArticulo + "\n";
            total += totalArticulo;
        }
        carritoMensaje += "\n Total: $" + total;
        console.log(carritoMensaje);
    }
}

function agregarArticuloNuevo() {
    let nombre = prompt("Ingrese el nombre del artículo");
    let precio = prompt("Ingrese el precio del artículo");
    let cantidad = prompt("Ingrese cuántos artículos quiere");
    precio = parseInt(precio);
    cantidad = parseInt(cantidad);
    
    if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        console.log("Valores no válidos, por favor vuelva a intentarlo");
    } else if (nombre.trim() === "") {
        console.log("Nombre no válido, por favor ingrese un nombre válido");
    } else {
        let nuevoArticulo = {nombre: nombre, precio: precio, cantidad: cantidad};
        articulos.push(nuevoArticulo);
        console.log(`Artículo ${nombre} agregado a la lista de artículos`);
    }
}

function eliminarDelCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
    } else {
        let eliminar = prompt("Ingrese el número del artículo que desea eliminar del carrito");
        eliminar = parseInt(eliminar);
        
        if (isNaN(eliminar) || eliminar < 1 || eliminar > carrito.length) {
            console.log("Número de artículo no válido");
        } else {
            // Se obtiene el objeto eliminado del array que devuelve splice
            let articuloEliminado = carrito.splice(eliminar - 1, 1)[0];
            
            for (let i = 0; i < articulos.length; i++) {
                if (articuloEliminado.nombre === articulos[i].nombre) {
                    articulos[i].cantidad += articuloEliminado.cantidad;
                }
            }

            console.log(`Artículo ${articuloEliminado.nombre} eliminado del carrito`);
        }
    }
}