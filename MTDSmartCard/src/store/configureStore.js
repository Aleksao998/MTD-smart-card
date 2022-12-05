import { createStore, combineReducers } from "redux";
import profileDataReducer from "../reducers/userProfile";

export default () => {
  const store = createStore(profileDataReducer);
  return store;
};
