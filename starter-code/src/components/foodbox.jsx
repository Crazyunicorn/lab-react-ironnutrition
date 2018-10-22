import React, {Component} from 'react'

class FoodBox extends Component {

render(){
  return (
  //  {{name, image, calories}  = this.props.oneFood}
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.image} /> {/*ici on viens récupérer les props fournis par le parents, ici app.js au sein de FoodBox.*/}
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <br />
              <small>{this.props.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value="1"
              />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>


  );
}
}

export default FoodBox;
