let marcas = [];
let modelos = [];
let veiculos = [];

// function cadastrarMarca(marca) {
// 	if (marca === '') return;
// 	if (marcas.some(m => m === marca)) return;
// 	marcas.push(marca);	
// 	console.log('Marca cadastrada com sucesso!');
// }

function cadastrarModelo(modelo, marca) {
	if (marca === '' || modelo === '') return;
	let obj = {
		nome: modelo,
		marca
	}
	modelos.push(obj);
	console.log('Modelo cadastrado com sucesso!');
}

// cadastrarMarca('Fiat');
// cadastrarMarca('BMW');
// cadastrarMarca('Audi');
cadastrarModelo('Uno', 'Fiat');
cadastrarModelo('CRONOS', 'Fiat');
cadastrarModelo('X5', 'BMW');
cadastrarModelo('M5', 'BMW');

// console.log(marcas);
console.log(modelos);