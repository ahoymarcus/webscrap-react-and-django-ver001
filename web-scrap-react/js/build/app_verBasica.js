/*
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import ProdList from './components/ProdList';


let itens = [
  {title: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
  {title: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
  {title: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20},
  {title: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
  {title: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
  {title: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20},
  {title: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
  {title: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
  {title: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20},
  {title: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
  {title: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
  {title: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20},
  {title: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
  {title: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
  {title: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20},
  {title: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
  {title: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
  {title: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20},
  {title: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
  {title: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
  {title: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20}
]


class app_verBasica extends React.Component{
	constructor(props){
    super(props);
    this.state = {
      itens: [
        {produto: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
        {produto: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
        {produto: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20},
        {produto: "caneca-azul", link: "http://teste-de-link.com/", preco: 55.00},
        {produto: "livro de mapas", link: "http://teste-de-link.com/", preco: 113.50},
        {produto: "toalha felpuda", link: "http://teste-de-link.com/", preco: 64.20}],
      
    };
  }
  
  
  
  
	render(){
    
    
    
    return(
      <div className="App">
        <Header />
        <div className="Main">
          <div className="background"></div>
          
          <Form />
          
          <div className="selecionado"></div>
          
          <h2>Veja abaixo o catálogo de produtos:</h2>
          <ProdList className="Lista" produtos={this.state.itens} />
            
          
        </div>
        <Footer />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById("app")
  );

*/
"use strict";