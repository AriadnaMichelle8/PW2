//ForEach

// const frutas =['durazno', 'piña', 'manzana', 'uva'];
// frutas.forEach((fruta) => {
//     console.log(fruta);
// });


// frutas.forEach((fruta, index, array)=>{
//     console.log(fruta);
//     console.log(index);
//     console.log(array);
// });

//Objetos

// var miCarro = new Object();
// miCarro.marca= 'Ford';
// miCarro.modelo= 'Fiesta';
// miCarro.año='2007';
// console.log(mmiCarro);

// var miCarro = {
//     marca: 'Ford',
//     modelo: 'Fiesta',
//     año: 2007, 
//     verificado: false,
//     emplacada: true,
//     fechaMultas: ["12/05/2019", "25/12/2026"]
    
// }
// console.log(miCarro);
// console.log(miCarro.fechaMultas[1]);

let alumno = {
    id: 321285676,
    nombre: "Michelle",
    primerApellido: "Castro",
    segundoApellido: "Cruz",
    edad: 21,
    titulado: false,
    egrasado: {
        estado: false,
        semestreCursado: 6,
        materiasDebe: 0,
        turno: "Matutino",
        promedio: 8.51
    },
    domicilio:{
        calle: "Lazaro Cardenas",
        numero: 98,
        colonia: "Santa Maria Tlayacampa",
        cp: 54110,
        estado: "Estado de México",
        pais: "México",
    },
    primaria:{
        nombre: "Emiliano Zapata",
        actividadPrimerdia: function(){
            console.log(dibujar);
        },
        actividadRecurrente: function(){
            console.log("Tareas");
        },
        datosMaestra:{
            nombre: "Angeles",
            edad: 60,
            estudios: "Pedagogia"
        }
        },
        secundaria:{
            nombre: "Niños Heroes",
            chisme (chismear){
                return `dejen de $(chismear)`;
            },
            mensaje (mensajeAlumno){
                return `${this.nombre} es la secundaria y el alumnoo tiene que ir a ${mensajeAlumno}`;
        }
    }
}
console.log(alumno.primaria.datosMaestra.nombre);
console.log(alumno.secundaria.chisme("chismees"));
console.log(alumno.secundaria.mensaje("Direccion"));