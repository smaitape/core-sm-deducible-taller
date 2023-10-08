const { INPUT } = require('./supports/input');
const Service = require('./service')
const input = INPUT;
console.log("input: ",input);

function obtenerDeducibles(input) {
  const result = Service.leerDeducibleTaller(input);
  return result;
};

const resultado = obtenerDeducibles(input);
console.log(JSON.stringify(resultado));