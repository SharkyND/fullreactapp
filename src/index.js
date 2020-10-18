import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import App from "./App";
import { Provider } from "react-redux"; //We have to wrap our whole element with it
import { configureStore } from "./store";

const store = configureStore();
const persist = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading..</div>} persistor={persist}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
