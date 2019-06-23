import React from 'react';


class ProdItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {counter: 3};
	}
	
	render() {
    
    //   
    // 
    
    var produtos = this.props.produtos.map( (produto, index) => {
        return <dl key={index}>
            
            <dt>{index+1}. Produto: {produto.produto}</dt> 
            
          <div className="Grid">
            <dd><img src={produto.link} alt={produto.produto} /></dd>
            <dd>R$ {produto.preco}</dd>
          </div>
        </dl>;
    });
    
    return <div className="Lista">{produtos}</div>;
	}
}

export default ProdItem