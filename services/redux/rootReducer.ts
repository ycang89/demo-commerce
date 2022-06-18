import { combineReducers } from "redux";

import { baseApi } from "./apis/base";
import { ablrApi } from './apis/ablr';
import uiApp from "./slices/uiApp";
import catalog from "./slices/catalog";

export default combineReducers({
  uiApp,
  catalog,
  [ablrApi.reducerPath]: ablrApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
