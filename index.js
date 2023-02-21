let marcasLocalStorage = JSON.parse(localStorage.getItem('marcas'));
let modelosLocalStorage = JSON.parse(localStorage.getItem('modelos'));
let veiculosLocalStorage = JSON.parse(localStorage.getItem('veiculos'));

let marcas = marcasLocalStorage ? marcasLocalStorage : [];
let modelos = modelosLocalStorage ? modelosLocalStorage : [];
let veiculos = veiculosLocalStorage ? veiculosLocalStorage : [];

function cadastrarMarca(marca) {
	if (marca === '') return;
	if (marcas.some(m => m === marca)) return;
	marcas.push(marca);	
	localStorage.setItem('marcas', JSON.stringify(marcas));
	return 'Marca cadastrada com sucesso!';
}

function cadastrarModelo(modelo, marca) {
	if (marca === '' || modelo === '') return;
	let obj = {
		nome: modelo,
		marca
	}
	modelos.push(obj);
	localStorage.setItem('modelos', JSON.stringify(modelos));
	return 'Modelo cadastrado com sucesso!';
}

function cadastrarVeiculo(modelo, marca, nome, km, valor, cor, img) {
	let obj = { nome, marca, modelo, cor, km, valor, img };
	if (veiculos.some(v => v.nome === obj.nome)) return;
	veiculos.push(obj);
	localStorage.setItem('veiculos', JSON.stringify(veiculos));
	return 'Veículo cadastrado com sucesso!';
}

function listarVeiculos() {
	return veiculos;
}

// cadastrarMarca('Fiat');
// cadastrarMarca('BMW');
// cadastrarMarca('Audi');
// cadastrarModelo('Uno', 'Fiat');
// cadastrarModelo('CRONOS', 'Fiat');
// cadastrarModelo('X5', 'BMW');
// cadastrarModelo('M5', 'BMW');
// cadastrarVeiculo('Uno', 'Fiat', 'Fiat Uno Vermelho', 0, 46840.00, 'Vermelho');
// cadastrarVeiculo('CRONOS', 'Fiat', 'Fiat CRONOS Branco', 0, 93843.00, 'Branco');

// console.log(marcas);
// console.log(modelos);
// console.log(listarVeiculos());