import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./apis/base";
import { ablrApi } from "./apis/ablr";
import { logger } from './middlewares/logger';
import rootReducer from "./rootReducer";
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([baseApi.middleware, ablrApi.middleware, logger]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
