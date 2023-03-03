/*
 var estudiantes = ["Maria","Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for(var i =0; i < estudiantes.length; i++ ){
    saludarEstudiantes(estudiantes[i]);
}
*/
//otro ejemplo
var estudiantes = ["Maria","Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for(var esudiante of estudiantes){
    saludarEstudiantes(esudiante);
    
}
