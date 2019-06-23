import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    this.setState({ value: event.target.value });
  }
  
  render(){
    return(
      <div className="Form">
        
        <form action="http://127.0.0.1:8000/scrapapp" method="GET">
          Produto: <input type="text" name="produto" value={this.state.value} onChange={this.handleChange} placeholder="Escolha o seu produto..." />
          <input type="submit" value="Escolha seu produto" />
          
          <span>{this.state.value}</span>
        </form>
        
          
      </div>
     );
  }
  
}

export default Form;

