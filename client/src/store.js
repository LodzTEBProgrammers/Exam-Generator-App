import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./sevices/userService";

// Corrected reducer key
export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer // Fixing the key here
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userApi.middleware)
});

setupListeners(store.dispatch);
