import { combineReducers } from "redux";

import { routesReducer } from "./routes.reducer";

export default combineReducers({ routes: routesReducer });
