import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore } from "./store/store";
import { Switcher } from "./components/Switcher/Switcher";

ReactDOM.render(
  <Provider store={createStore()}>
    <Switcher />
  </Provider>,
  document.getElementById("root")
);
