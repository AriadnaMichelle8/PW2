//definir el arreglo
let tareas=[];
//funcion para mostrar el menu
function mostrarMenu(){
    return parseInt(prompt(`
        Opciones disponibles
        1. Agregar una tarea
        2. Ver todas las tareas
        3. Marcar tarea como completada
        4. Salir
        "Elije una opcion"
    `));
}

function agregarTarea(){
    let nombre = prompt("Introduce el nombre de tu tarea: \n");
    if(nombre){
        let tareas
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

function verTarea(){
    if(tareas.length === 0){
        alert("listas de tareas vacia");
    }else{
        let mensaje = "Lisras de tareas \n";
        tareas.forEach((tarea, index) =>{
             mensaje+= `${index + 1} .- ${tarea.nombre} [ ${tarea.completada ? "Completada":"Pendiente"}]\n`
    

        });
        alert(mensaje);
    }
}

function marcarTareaCompletada(){
    let numero = parseInt(prompt("Ingresa el numero de tarea que esten completadas"))
    if(numero > && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(

        )
}
}


//funcion de inicio para el flujo de nuestro programa
function iniciarPrograma(){
    let bandera = true;
    while(bandera){
        let opcion = mostrarMenu();
        switch (opcion){
            case 1:
                agregarTarea();
                console.log(tareas);
                break;
            case 2:
                verTareas();

                break;
            case 3:
                marcarTareaRealizada();
                break;
            case 4:
                bandera = false;
                break;
            default:
                alert("Opcion no valida, elige una opcion del menu");
                break;
        }
    }
}

iniciarPrograma();

//poner una cantidad  y contador a cada ropa

