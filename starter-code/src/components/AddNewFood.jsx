import React, {Component} from 'react';

class AddNewFood extends Component{
  constructor(props) {
    super(props)
    }
    render(){



      return(
        <button className='button is-large is-link' onClick={() => this.props.x()}  >
          <p>addNewfood</p>
        </button>
      );
    }

}

export default AddNewFood; // on exporte le componeonCnt du fichier pour pouvoir l utiliser, ici dans App.js
