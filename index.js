let marcas = [];//['Fiat', 'BMW', 'Audi'];
let modelos = [];

function cadastrarMarca(marca) {
	if (marca === '') return;
	if (marcas.some(m => m === marca)) return;
	marcas.push(marca);	
	console.log('Marca cadastrada com sucesso!');
}

function cadastrarModelo(marca, modelo) {
	if (marca === '' || modelo === '') return;
	cadastrarMarca(marca);
	if (modelos.some(m => m === modelo)) return;
	modelos.push(modelo);	
	console.log('Modelo cadastrado com sucesso!');
}

// cadastrarMarca('Fiat');
// cadastrarMarca('BMW');
// cadastrarMarca('Audi');
cadastrarModelo('Fiat', 'Uno');
cadastrarModelo('Fiat', 'CRONOS');
cadastrarModelo('BMW', 'X5');
cadastrarModelo('BMW', 'M5');

console.log(marcas);
console.log(modelos);