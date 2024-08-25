// Importa registrar y leer desde operaciones.js.
const { registrar, leer } = require('./operaciones');


// process.argv es un array que contiene todos los argumentos pasados al script.

const [, , operacion, nombre, edad, tipoanimal, color, enfermedad] = process.argv;


// Se convierte edad a un número usando parseInt para trabajar mejor
if (operacion === "registrar") {
    registrar(nombre, parseInt(edad), tipoanimal, color, enfermedad);
}
else if (operacion === "leer") {
    leer();
} 

else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}


//instrucciones
// node index.js registrar Benito "9 años" perro blanco vomitos
// node index.js leer

