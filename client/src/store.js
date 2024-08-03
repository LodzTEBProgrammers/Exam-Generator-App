// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authReducer from './services/auth/authSlice';
import examReducer from './services/exam/examSlice';
import { userApi } from "./services/userService";
import { examApi } from "./services/examService";

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Root reducer configuration
const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [examApi.reducerPath]: examApi.reducer, // Corrected to use examApi.reducer
  exam: examReducer,
  auth: authReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    }).concat(userApi.middleware, examApi.middleware), // Added examApi.middleware
});

// Persistor configuration
const persistor = persistStore(store);

// Setup listeners
setupListeners(store.dispatch);

export { store, persistor };
