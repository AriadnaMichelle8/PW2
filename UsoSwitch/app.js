let opci = prompt(`
    Elija una opcion:
    1. Libros
    2. Pelicula
    3. Juegos
    `);

switch(opci){
    case "1":
        console.log("Has elegido la opcion 1: Libros");
        break;
    case "2":
        console.log("Has elegido la opcion 2: Pelicula");
        break;
    case "3":
        console.log("Has elegido la opcion 3: Juegos");
        break;
    default:
        console.log("Opcion no valida");
        break;
}

