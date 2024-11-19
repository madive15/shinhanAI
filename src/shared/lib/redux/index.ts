import { persistConfig } from "~/shared/lib/redux/persist.config";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore, createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import authReducer from "~/features/auth/auth.slice";
import userReducer from "~/features/user/user.slice";
import { userApiSlice } from "~/features/user/user.api";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    userApi: userApiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(userApiSlice.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store); // persistor은 index.tsx에서 사용
