import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index' ; 

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state={term: ''}; 

    //this is another method to creating the context w fat arrow
    this.onInputChange = this.onInputChange.bind(this); 
    this.onFormSubmit = this.onFormSubmit.bind(this); 
  } 
  
  onInputChange(event){
    this.setState({term: event.target.value }); 
  }

  //prevent browser from submitting form
  onFormSubmit(event){
    event.preventDefault(); 

    // go and fetch weather data
    // we pass in city to the function
    this.props.fetchWeather(this.state.term); 

    //clear input after submit
    this.setState({term: ''}); 
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}
                            
// we're passing null because mapdispatch has to go in as second argument
// we're saying that redux has to maintain state but we dont' care about it at this point
export default connect(null, mapDispatchToProps)(SearchBar); 






                            
