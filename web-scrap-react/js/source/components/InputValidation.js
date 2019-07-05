import React from 'react';

class InputValidation extends React.Component{
	constructor(props){
		super(props);
		this.state = { valProd: 'Teste de validação do produto!' };
	}
	
	render(){
	return <h4 className="Validation" aria-live="polite">{/*this.state.valProd*/}</h4>;
	}
	
}

export default InputValidation

