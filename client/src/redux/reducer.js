import {
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_SEARCH,
  GET_BY_REV,
  GET_BY_CON,
  GET_POP,
  GET_ABC,
  GET_BY_ACT,
  GET_ACTS,
} from "./actions.js";

const initialState = {
  Countries: [],
  Filtrados1: [],
  Filtrados2: [],
  Country: [],
  Acts: [],
  Conts: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_COUNTRIES) {
    const conts = new Set(action.payload.map((e) => e.continents));
    return {
      ...state,
      Countries: action.payload,
      Filtrados1: action.payload,
      Filtrados2: action.payload,
      Conts: Array.from(conts),
    };
  }
  if (action.type === GET_COUNTRY) {
    console.log(action.payload);
    return {
      ...state,
      Country: action.payload,
    };
  }
  if (action.type === GET_SEARCH) {
    return {
      ...state,
      Filtrados2: action.payload,
    };
  }
  if (action.type === GET_ACTS) {
    const acts = new Set(action.payload.map((e) => e.name));
    return {
      ...state,
      Acts: Array.from(acts),
    };
  }
  if (action.type === GET_POP) {
    return {
      ...state,
      Filtrados2: [...state.Filtrados2].sort(function (a, b) {
        if (Number(a.population) < Number(b.population)) {
          return 1;
        }
        if (Number(a.population) > Number(b.population)) {
          return -1;
        }
        return 0;
      }),
    };
  }
  if (action.type === GET_ABC) {
    return {
      ...state,
      Filtrados2: [...state.Filtrados2].sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    };
  }
  if (action.type === GET_BY_REV) {
    return {
      ...state,
      Filtrados2: [...state.Filtrados2].reverse(),
    };
  }
  if (action.type === GET_BY_CON) {
    return {
      ...state,
      Filtrados2: [...state.Countries].filter((d) =>
        d.continents.includes(action.payload)
      ),
      Filtrados1: [...state.Countries].filter((d) =>
        d.continents.includes(action.payload)
      ),
    };
  }
  if (action.type === GET_BY_ACT) {
    return {
      ...state,
      Filtrados2: [...state.Filtrados1].filter((country) =>
        country.activities?.find((e) => e.name.includes(action.payload))
      ),
    };
  }
  return state;
}

export default rootReducer;
