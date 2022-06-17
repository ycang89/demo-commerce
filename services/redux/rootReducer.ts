import { combineReducers } from "redux";

import { baseApi } from "./apiServices/base";
import uiApp from "./slices/uiApp";

export default combineReducers({
  uiApp,
  [baseApi.reducerPath]: baseApi.reducer,
});
