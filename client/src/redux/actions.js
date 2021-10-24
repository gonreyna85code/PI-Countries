import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_SEARCH = "GET_SEARCH";


export function getCountries() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/countries");
      return dispatch({ type: "GET_COUNTRIES", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getCountry(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/countrie/${id}`);
      return dispatch({ type: "GET_COUNTRY", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postActivity(act) {  
  return async function (dispatch) {
    try {
      if(act !== ''){await axios.post("http://localhost:3001/activity", act)};
    } catch (error) {
      console.log(error);
    }
  }  
}
export function getSearch(name) {
  console.log('hola')
  return async function(dispatch) {
      try {
          const json = await axios.get(`http://localhost:3001/country?name=${name}`);
          return dispatch({ type: "GET_SEARCH", payload: json.data})
      } catch(error) {
          console.log(error)
      };
  }
}


