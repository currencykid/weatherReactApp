import { FETCH_WEATHER } from '../actions/index'; 

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER: 
      // it's in an array cuz we're gonna have multiple cities coming in 
      // we arent' mutating state, we're returning a new version of it 
       // return state.concat([action.payload.data]) ; 
      // with es6
      return [action.payload.data, ...state ]; 
  }
  return state;
}
