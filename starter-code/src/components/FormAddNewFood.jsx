import React, {Component} from 'react'
import './App.css';

class FormAddFood extends Component {
  constructor(props) {
    super(props)
    this.state = {

      name:'',
      calories:'',
      image:''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e){
  this.setState({[e.target.name]: e.target.value}); {/*permet de recuperer la valeur de la value en fonction du name de l'input (verifier par le champs value)*/}
}

handleSubmit(e){
  //console.log(this.state.name, this.state.calories, this.state.image);
  e.preventDefault();
}


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="field "> {/*command D pour la selection multiple*/}
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="ex: snake" name='name' value={this.state.name} onChange={(e) =>{this.handleChange(e)}}/> {/*value permet de s'ssurer
      que la valeur de l'input est bien celle ciblé pour changer l'état et on appelle handleChange pour la recup */}
  </div>
</div>
<div className="field">
  <label className="label">Calories</label>
  <div className="control">
    <input className="input" type="text" placeholder="350 calories" name='calories' value={this.state.calories} onChange={(e) =>{this.handleChange(e)}}/>
  </div>
</div>
<div className="field">
  <label className="label">Image</label>
  <div className="control">
    <input className="input" type="text" placeholder="link" name='image'value={this.state.image} onChange={(e) =>{this.handleChange(e)}}/>
  </div>
</div>
<div className="control">
  <button type="submit" value="Submit" className="button is-link"  onClick={()=>this.props.y()}>Submit</button>
</div>
    </form>

    );
  }
}

export default FormAddFood;
{/*onClick={() => this.setState({displaysForm: true})}*/}
