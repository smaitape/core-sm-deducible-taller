1. La búsqueda se realizará colocando el request de entrada en el archivo: 
   'src\jobs\supports\input.js'

   Por ejemplo:
   module.exports.INPUT = {
        "payload": {
            "texto": "*Los siniestros, serán atendidos únicamente en la relación de talleres especiales descritos en la cláusula  VEHA07 20% del monto indemnizable, mínimo US$ 200 20% del monto indemnizable para pérdida total"
        }
    }

2. El archivo plano se debería colocar en el archivo:
   'src\jobs\supports\muestra.js'

   En esta ocasión sólo colocaré el archivo plano formateado en json.

3. La ejecución de este ejercicio será local con el comando desde la carpeta que contiene el archivo app.js, el comando es node app.js

4. Se espera una salida por consola del resultado de la búsqueda.