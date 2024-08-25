const { registrar, leer } = require('./operaciones');

const [, , operacion, nombre, edad, tipoanimal, color, enfermedad] = process.argv;


if (operacion === "registrar") {
    registrar(nombre, parseInt(edad), tipoanimal, color, enfermedad);
} else if (operacion === "leer") {
    leer();
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}


// ejecutar:
// node index.js registrar Benito "9 años" perro blanco vomitos
// node index.js leer
