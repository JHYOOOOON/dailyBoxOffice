import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import DataStore from "./stores/DataStore";
import "./scss/style.scss";

const dataStore = new DataStore();

ReactDOM.render(
  <Provider dataStore={dataStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
