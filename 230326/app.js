let nombres = [];
function mostrarMenu(){
    let opcion;

    do{

    opcion = prompt(`
        opciones disponibles
        1. Agregar nombre
        2. Mostrar nombre
        3. Salir
        "Elige una opcion"
        `);
    switch(opcion){
        case "1":
            console.log("Se esta trabajando la funcion de agregar nombre");
            agregarNombre();
            break;
        case "2":
            console.log("Se esta trabajando la funcion de mostrar nombre");

            mostrarNombres();
            break;
        case "3":
            alert("Saliendo del programa");
            break;
        default:
            alert("Opcion no valida");
    }

    }while(opcion !=="3");
}
mostrarMenu();


function agregarNombre(){
    let nombre = prompt ("Ingrese un nombre");
    if(nombre){
        nombres.push(nombre);
        alert(`Nombre "$(nombre)" agregado correctamente`);
    }else{
        alert("No se ingreso ningun nombre. Intentalo de nuevo");
    }
}


function mostrarNombres(){
    if(nombre.length === 0){
        alert("No hay nombres en el arreglo");
    }else{
        let mensaje = "Nombres almacenados\n";
        nombres.forEach((nombre, indice)=>{
            mesnaje+= `$(indice+1).- $(nombre)\n`;
        });
        alert(mensaje);
    }
}