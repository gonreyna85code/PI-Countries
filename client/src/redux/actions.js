import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_SEARCH = "GET_SEARCH";
export const GET_BY_REV = "GET_BY_REV";
export const GET_CONTS = "GET_CONTS";
export const GET_ACTS = "GET_ACTS";
export const GET_ABC = "GET_ABC";
export const GET_POP = "GET_POP";
export const GET_BY_CON = "GET_BY_CON";
export const GET_BY_ACT = "GET_BY_ACT";



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
  return async function(dispatch) {
      try {
          const json = await axios.get(`http://localhost:3001/country?name=${name}`);
          return dispatch({ type: "GET_SEARCH", payload: json.data})
      } catch(error) {
          console.log(error)
      };
  }
}
export function getByRev() {
  return { type: "GET_BY_REV"};
}
export function getByCon(data) {
  return { type: "GET_BY_CON", payload: data};
}
export function getByAct(data) {
  return { type: "GET_BY_ACT", payload: data};
}
export function getConts() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/countries");
      return dispatch({ type: "GET_CONTS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getActs() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/activity");
      return dispatch({ type: "GET_ACTS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAbc() {
  return { type: "GET_ABC"};
}

export function getPop() {
  return { type: "GET_POP"};
}


