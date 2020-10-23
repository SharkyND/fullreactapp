// we will put the logic of putting up our store

import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos, isLoading } from "./components/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = { todos, isLoading }; // we will put all the reducers defined later on

//The config of the storage, how to save and where to store our data
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers); //This will combine all the reducer in a root and we can then pass it to the store we created

//This will help store the storage of the todos // default to local storage on the web
const persistedReducer = persistReducer(persistConfig, rootReducer);

/*export const configureStore = () => createStore(rootReducer);
 */
export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
