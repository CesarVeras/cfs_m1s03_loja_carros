let marcas = [];//['Fiat', 'BMW', 'Audi'];

function cadastrarMarca(marca) {
	if (marca === '') return;
	if (marcas.some(m => m === marca)) return;
	marcas.push(marca);	
	console.log('Marca cadastrada com sucesso!');
}

cadastrarMarca('Fiat');
cadastrarMarca('BMW');
cadastrarMarca('Audi');

console.log(marcas);