const ServiceSupport = require('./supports/service.support');

module.exports = {
  leerDeducibleTaller(event){
    let resultFinal = {}
    const result = ServiceSupport.leerDeducibleTaller(event);
    resultFinal.payload = result;
    return resultFinal;
  }
}