let marcas = [];
let modelos = [];
let veiculos = [];

// function cadastrarMarca(marca) {
// 	if (marca === '') return;
// 	if (marcas.some(m => m === marca)) return;
// 	marcas.push(marca);	
// 	console.log('Marca cadastrada com sucesso!');
// }

// function cadastrarModelo(modelo, marca) {
// 	if (marca === '' || modelo === '') return;
// 	let obj = {
// 		nome: modelo,
// 		marca
// 	}
// 	modelos.push(obj);
// 	console.log('Modelo cadastrado com sucesso!');
// }

function cadastrarVeiculo(modelo, marca, nome, km, valor, cor) {
	let obj = { nome, marca, modelo, cor, km, valor	}
	if (veiculos.some(v => v.nome === obj.nome)) return;
	veiculos.push(obj);
	console.log('Veículo cadastrado com sucesso!');
}

// cadastrarMarca('Fiat');
// cadastrarMarca('BMW');
// cadastrarMarca('Audi');
// cadastrarModelo('Uno', 'Fiat');
// cadastrarModelo('CRONOS', 'Fiat');
// cadastrarModelo('X5', 'BMW');
// cadastrarModelo('M5', 'BMW');
cadastrarVeiculo('Uno', 'Fiat', 'Fiat Uno Vermelho', 0, 46840.00, 'Vermelho');
cadastrarVeiculo('CRONOS', 'Fiat', 'Fiat CRONOS Branco', 0, 93843.00, 'Branco');

// console.log(marcas);
// console.log(modelos);
console.log(veiculos);