import React, { Component } from 'react';
import logo from '../logo.svg';// lors du changement de dossier de logo svg, bien penser à spécifier le nouveau chemin.
import './App.css';
import 'bulma/css/bulma.css';
import foods from '../foods.json'; // lors du changement de dossier d'app.js, bien penser à spécifier le nouveau chemin.
import FoodBox from './foodbox.jsx';
import AddNewFood from './AddNewFood';
import FormAddFood from './FormAddNewFood.jsx';

class App extends Component {
  constructor(props) {
      super(props)
this.state = {
  listFood: foods,
  displaysForm: true

} // le state est toujours dans le constructor, ici on défini listFood
//en state pour le manipuler par la suite, car foods renvoie tjrs à l array contenu dans foods.json
}

ViewBtn(){
  this.setState({displaysForm: false})
}

ViewForm(){
  this.setState({displaysForm: true})
}

  render(){
    return (


      <div className="App">

        { (this.state.displaysForm ) ?  <AddNewFood x={this.ViewBtn.bind(this)} />  : <FormAddFood y={this.ViewForm.bind(this)}/>  }


        {this.state.listFood.map((food, idx) => {
          return(
            <FoodBox
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
            key={idx} > // on utilise le deuxième paramètre de la fonction map comme clef, le deuxième paramètre est tjrs un index
            </FoodBox>

          )
        }
      )}
      </div>
      );
  }
}

export default App;

// {/*     {  (this.state.displayForm ) ? return( <AddNewFood onClick={() => this.setState(displayForm: false)} />)  : return (<FormAddFood /> )  }   fonction ternaire if else */}
//
// {
// if (this.state.displaysForm) {
//    return <AddNewFood onClick={() => this.setState(this.displaysForm: false)} />
// }else{
//  return ( <FormAddFood /> )
// }
// }
