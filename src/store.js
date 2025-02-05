import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bankReducer from "./auth/bankSlice";
import { combineReducers } from "redux";

// Configure persist settings
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth'], // Only persist 'auth' slice
};

// Combine reducers if needed
const rootReducer = combineReducers({
  auth: bankReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for Redux Persist
    }),
});

// Create a persistor for the store
export const persistor = persistStore(store);

export default store;

