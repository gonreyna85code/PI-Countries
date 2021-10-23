import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";


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


