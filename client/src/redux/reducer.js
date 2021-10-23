import {
  GET_COUNTRIES,
  GET_COUNTRY,
  
} from "./actions.js";

const initialState = {
  Countries: [],
  Filtrados: [],
  Country: [],
  
};

function rootReducer(state = initialState, action) {
  
  if (action.type === GET_COUNTRIES) {
    return {
      ...state,
      Countries: action.payload,
      Filtrados: action.payload,
    };
  }
  if (action.type === GET_COUNTRY) {
    console.log(action.payload)
    return {
      ...state,
      Country: action.payload,
    };
  } 
  return state;
}

export default rootReducer;
