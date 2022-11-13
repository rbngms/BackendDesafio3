const fs = require('fs');


class Contenedor {
	constructor(filename) {
		this.filename = filename;
	}

	save (obj) {
		productoNuevo.id = products.length+1
		products.push(productoNuevo)
		const objString = JSON.stringify(obj, null, 2)
		;(async () => {
			
			try {
			

			  await fs.promises.writeFile('./productos.txt', objString)
	
		
			} catch (e) {
			  console.error(e.message)
			}
		  })()
	}

	getById (id) {
		console.log(`id asignado ${id}`)
		
		try {
			const objString = `[
				{
					"id": 1,
					"tittle": " Coca cola",
					"precio": 10,
					"thumbnail": "cocacola.png"
				  },
				  {
					"id": 2,
					"tittle": " budweiser",
					"precio": 45,
					"thumbnail": "budweiser.png"
				  },
				  {
					"tittle": "Fanta",
					"precio": 10,
					"thumbnail": "Fanta.png",
					"id": 3
				  }
			  ]`
			const productsObj = JSON.parse(objString)
			const productById = productsObj.find( (product) => {
				const isProduct = product.id === id
				return isProduct
			})
			
			console.log(productById)
		} catch (error) {
			console.log(error.message);
		}
	}


	getAll () {
		
		try {
			const objString = `[
				{
					"id": 1,
					"tittle": " Coca cola",
					"precio": 10,
					"thumbnail": "cocacola.png"
				  },
				  {
					"id": 2,
					"tittle": " budweiser",
					"precio": 45,
					"thumbnail": "budweiser.png"
				  },
				  {
					"tittle": "Fanta",
					"precio": 10,
					"thumbnail": "Fanta.png",
					"id": 3
				  }
			  ]`
			const productsObj = JSON.parse(objString)
			
			console.log(productsObj)
		} catch (error) {
			console.log(error.message);
		}
	}

	deleteById (id) {
		
		try {
			const objString = `[
				{
					"id": 1,
					"tittle": " Coca cola",
					"precio": 10,
					"thumbnail": "cocacola.png"
				  },
				  {
					"id": 2,
					"tittle": " budweiser",
					"precio": 45,
					"thumbnail": "budweiser.png"
				  },
				  {
					"tittle": "Fanta",
					"precio": 10,
					"thumbnail": "Fanta.png",
					"id": 3
				  }
			  ]`
			const productsObj = JSON.parse(objString)
			const indexById = productsObj.findIndex( (product) => {
				const isProduct = product.id === id
				return isProduct
			})
			
			console.log(indexById)
			products.splice (indexById, 1)

			console.log(products)
		} catch (error) {
			console.log(error.message);
		}
	}


	deleteAll () {
		
		;(async () => {
		const contenido = `-`
			try {
			 
			  await fs.promises.writeFile('./productos.txt', contenido)
	
		
			} catch (e) {
			  console.error(e.message)
			}
		  })()
	}

	numeroRandom () {
		/*products.push(productoNuevo)	*/
		;(async () => {
			
				try {
					
					const numeroRandom = Math.floor(Math.random() * products.length+1);
					console.log(numeroRandom)

					const objString = `[
						{
							"id": 1,
							"tittle": " Coca cola",
							"precio": 10,
							"thumbnail": "cocacola.png"
						  },
						  {
							"id": 2,
							"tittle": " budweiser",
							"precio": 45,
							"thumbnail": "budweiser.png"
						  },
						  {
							"tittle": "Fanta",
							"precio": 10,
							"thumbnail": "Fanta.png",
							"id": 3
						  }
					  ]`
					const productsObj = JSON.parse(objString)
					const productById = productsObj.find( (product) => {
						const isProduct = product.id === numeroRandom
						return isProduct
					})
			
					console.log(productById)
				} catch (e) {
				  console.error(e.message)
				}
			  })()
	}

}

const productosContenedor = new Contenedor('productos.txt')


const products = [
    {
    id: 1,
    tittle : ' Coca cola',
	precio : 10.00,
	thumbnail:'cocacola.png'
    },
	{
	id: 2,
	tittle : ' budweiser',
	precio : 45.00,
	thumbnail:'budweiser.png'
	},
	{
		id: 3,
		tittle : ' pilsen',
		precio : 69.00,
		thumbnail:'pilsen.png'
		}
	

]
const productoNuevo = {
    tittle : 'Fanta',
	precio : 10.00,
	thumbnail:'Fanta.png'
}


/*
productosContenedor.save(products)
productosContenedor.getById(1)
productosContenedor.getAll()
productosContenedor.deleteById(2)
productosContenedor.deleteAll()
*/
module.exports =
	Contenedor
	;

