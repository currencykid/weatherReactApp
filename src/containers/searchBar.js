import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state={term: ''}; 

    //this is another method to creating the context w fat arrow
    this.onInputChange = this.onInputChange.bind(this); 
  }

  onInputChange(event){
    this.setState({term: event.target.value }); 
  }

  //prevent browser from submitting form
  onFormSubmit(event){
    event.preventDefault(); 
  }

  render (){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group"> 
        <input 
          placeholder= "Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        /> 
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button> 
        </span>
      </form>
    );
  }
}
