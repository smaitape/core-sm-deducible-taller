module.exports = {
	leerDeducibleTaller(event){
		const { payload } = event;
		try {
			const muestraTotal = require('./muestra')
			//muestraTotal = transformarTextoPlanoAJson(muestraTotal)
			//console.log('muestraTotal.length: ',muestraTotal.length)
			const today = new Date();
			const yyyy = today.getFullYear();
			let mm = today.getMonth() + 1;
			let dd = today.getDate();
			if (dd < 10) dd = '0' + dd;
			if (mm < 10) mm = '0' + mm;
			const formattedToday = dd + mm + yyyy;
			let arrPromisesDeducibles = []
			try {
				let contDeducible = 1
				let ListaDeducibles = {}
				muestraTotal.forEach((deducible) => {
					if (deducible.TEXTO = payload.texto) {
						ListaDeducibles.idRegistro = formattedToday+'-'+contDeducible
						ListaDeducibles.deducible = deducible.DEDUCIBLE
						ListaDeducibles.copago = deducible.COPAGO
						ListaDeducibles.moneda = deducible.MONEDA
						ListaDeducibles.tipo = deducible.TIPO
						ListaDeducibles.marca = deducible.MARCA
						ListaDeducibles.taller = deducible.TALLER
						contDeducible++
						arrPromisesDeducibles.push(ListaDeducibles)
					}
				})
			} catch (error) {
				console.log('ERROR : ', error)
			}
			//const respPromiseAllDeducibles = await Promise.all(arrPromisesDeducibles)
			//console.log('RESULTADO - arrPromisesDeducibles: ', respPromiseAllDeducibles.length)
			return arrPromisesDeducibles
		} catch (error) {
			const errorObj = new Error(error)
			console.log('error: ',error)
			return errorObj.message
		}
	}
}

//function transformarTextoPlanoAJson(arrPolizas) {...}