import { combineReducers } from "redux";

import { baseApi } from "./apis/base";
import uiApp from "./slices/uiApp";
import catalog from "./slices/catalog";

export default combineReducers({
  uiApp,
  catalog,
  [baseApi.reducerPath]: baseApi.reducer,
});
