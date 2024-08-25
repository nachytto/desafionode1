//nose
const fs = require('fs');

function registrar(nombre,edad,tipoanimal,color,enfermedad){

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    
    const nuevaCita ={
        nombre,
        edad,
        tipoanimal,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf8');
    console.log('cita registrada con exito');
    
}
function leer(){
    const citas =JSON.parse(fs.readFileSync('citas.json','utf8'));
    console.log('citas registradas:');
    console.log(citas);
}
module.exports ={registrar, leer};