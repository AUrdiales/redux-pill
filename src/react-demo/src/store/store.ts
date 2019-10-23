import { createStore as createReduxStore } from "redux";

import mainReducer from "../reducer";

export function createStore() {
  return createReduxStore(mainReducer, {});
}
