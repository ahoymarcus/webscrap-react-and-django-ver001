import React from 'react';

import InputValidationOptList from './InputValidationOptList';


const pattern = "[Aa]lmofada.*[kr]$|" +
								"[Cc]aneca.*[Dknr]$|" +
								"[Cc]haveiro.*[knr]$|" +
								"[Cc]ombo.*n$|" +
								"[Cc]opo.*[sT]$|" +
								"[Kk]it.*s$|" +
								"[Ll]ivro.*[\)34n]$|";
							
class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
		this.resetForm = this.resetForm.bind(this);
  }
  
  handleChange(e){
    this.setState({ value: event.target.value });
  }
	resetForm(){
		this.setState({ value: '' });
	}
  
  render(){
		
		//placeholder="Escolha o seu produto..."
		
    return(
      <div className="Form">
        
        <form action="http://127.0.0.1:8000/scrapapp" method="GET">
				
					<button onClick={this.resetForm}>Reset</button><br />
					
          Produto: <input type="text" name="produto" value={this.state.value} onChange={this.handleChange}  list="input-valid" required pattern={pattern} />
          
					<InputValidationOptList />
					
					<input type="submit" value="Escolha seu produto" />
					
          <span>{this.state.value}</span>
        </form>
        
          
      </div>
     );
  }
  
}

export default Form;

