import React from 'react';
import ProdItem from './ProdItem';


class ProdList extends React.Component {
	
	render() {
    
    return <ProdItem className="Lista" produtos={this.props.produtos} />;
    
	}
}

export default ProdList