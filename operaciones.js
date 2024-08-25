// Importa el módulo fs de Node.js, que permite trabajar con el sistema de archivos.
const fs = require('fs');

// Define la función registrar
function registrar(nombre, edad, tipoanimal, color, enfermedad) {
    
    // Lee el contenido del archivo citas.json y lo convierte de una cadena JSON a un objeto JavaScript.
    // utf8 se usa para asegurarse de que el archivo se lea como texto en ese formato.
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    // objeto nuevaCita
    const nuevaCita = {
        nombre,
        edad,
        tipoanimal,
        color,
        enfermedad
    };

    // Agrega el nuevo objeto nuevaCita al array de citas.
    citas.push(nuevaCita);

    // Escribe el array actualizado de citas en su respectivo archivo.
    // JSON.stringify convierte el array a una cadena JSON.
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf8');
    console.log('Cita registrada con éxito.');
}

function leer() {
    // Lee el contenido del archivo citas.json y lo convierte de una cadena JSON a un objeto JavaScript.
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log('Citas registradas:');
    console.log(citas);
}
module.exports = { registrar, leer };
