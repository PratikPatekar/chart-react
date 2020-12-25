import React, { createContext, useReducer } from "react";

const state = {
  radio: "sector",
  topic_data: "",
  measure: "intensity",
  sector_data: "",
  source: "",
  region_data: "",
  swot: "",
  pest_data: "",
  confidence: "",
  slider: 2020,
  Side: false,
  DivNum: 0,
};
const store = createContext(state);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [State, setState] = useReducer(
    (state, newstate) => ({ ...state, ...newstate }),
    state
  );
  return <Provider value={{ State, setState }}>{children}</Provider>;
};

export { store, StateProvider };
