import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";
import { userApi } from "./service/userService";

const rootReducer = combineReducers({
  users: UserSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userApi.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
