let alumno = {
    id: 324578649,
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
        calle: "Avenida Central",
        numero: 123,
        colonia: "Industrial",
        cp: 54000,
        estado: "Estado de México",
        pais: "México",
    },
    primaria:{
        nombre: "Benito Juárez",
        actividadPrimerdia: function(){
            console.log("dibujar");
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
        nombre: "Secundaria Técnica 15",
        chisme(chismear){
            return `dejen de ${chismear}`;
        },
        mensaje(mensajeAlumno){
            return `${this.nombre} es la secundaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
}
console.log(alumno.primaria.datosMaestra.nombre);
console.log(alumno.secundaria.chisme("chismear")); 
console.log(alumno.secundaria.mensaje("Direccion"));