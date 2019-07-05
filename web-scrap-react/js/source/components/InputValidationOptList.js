import React from 'react';


let listValid = [
	'Combo Livros Crônicas de Gelo e Fogo – George R.R. Martin',
	'Chaveiro GOT Lannister',
	'Chaveiro GOT Stark',
	'Chaveiro GOT Targaryen',
	'Copo Viagem Metal 450ML GOT',
	'Caneca Alça Quadrada 500ML Lannister',
	'Caneca Alça Quadrada 500ML Targaryen',
	'Caneca Alça Quadrada 500ML Stark',
	'Caneca 3D GOT Stark Escudo',
	'Livro A Guerra dos Tronos – As Crônicas de Gelo e Fogo – Volume 1 – George R.R. Martin',
	'Livro Fogo e Sangue – George R.R. Martin',
	'Kit Almofadas Game Of Thrones',
	'Kit Almofada Porta Pipoca Game of Thrones',
	'Kit Shot Game of Thrones',
	'Almofada Game of Thrones Stark',
	'Almofada Game of Thrones Lannister',
	'Livro – A Tormenta de Espadas: As Crônicas de Gelo e Fogo – Livro 3',
	'Livro – A Guerra Dos Tronos – Volume 2 (HQ)',
	'Livro – O Festim dos Corvos: As Crônicas de Gelo e Fogo – Livro 4',
	'Copo Viagem Emborrachado Game of Thrones',
	'Caneca Game of Thrones Escudo Targaryen 3D',
]

class InputValidationOptList extends React.Component{
	
	render(){
		
		var optList = listValid.map( (opt, index) => {
			return <option key={index}>{opt}</option>;
		});
		
		
		return(
			<datalist id="input-valid">
				{
					optList
				}				
			</datalist>
		);
	}
}

export default InputValidationOptList

