// we will put the logic of putting up our store

import { createStore, combineReducers } from "redux";

const reducers = {}; // we will put all the reducers defined later on

const rootReducer = combineReducers(reducers); //This will combine all the reducer in a root and we can then pass it to the store we created

export const configureStore = () => createStore(rootReducer);
