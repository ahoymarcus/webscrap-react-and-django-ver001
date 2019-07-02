/*
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import ProdList from './components/ProdList';

import request from 'request';


class App extends React.Component{
	constructor(props){
    super(props);
    this.state = {
      itens: [
        {produto: "Combo Livros Crônicas", link: "imagens/Livros_Cronicas.png", preco: 69.90},
        {produto: "Copo Viagem Metal", link: "imagens/Livros_Cronicas.png", preco: 49.90},
        {produto: "Caneca Alça Quadrada 500ML", link: "imagens/Livros_Cronicas.png", preco: 59.90},
        {produto: "Chaveiro GOT Lannister", link: "imagens/Livros_Cronicas.png", preco: 29.90},
        {produto: "Caneca 3D GOT Strark", link: "imagens/Livros_Cronicas.png", preco: 59.90},
        {produto: "Livro A Guerra dos Tronos", link: "imagens/Livros_Cronicas.png", preco: 44.90}],
      selecionado: {produto: 'Combo Livros Crônicas', link: 'imagens/Livros_Cronicas.png', preco: 69.90}
    };
  }
  
  componentDidMount(){
    request('/index/', function(error, response, body){
      console.log('error', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      this.setState( { itens: body });
    });
  }
  
  
	render(){
    
    
    
    return(
      <div className="App">
        <Header />
        <div className="Main">
          <div className="background"></div>
          
          <Form />
          
          <div className="Selecionado">
            <span className="Sel-1">{this.state.selecionado.produto}</span>
            <span className="Sel-2"><img src={this.state.selecionado.link} alt={this.state.selecionado.produto} /></span>
            <span className="Sel-3">R$ {this.state.selecionado.preco}</span>
          </div>
          
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