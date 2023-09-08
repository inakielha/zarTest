import { configureStore, getDefaultMiddleware   } from "@reduxjs/toolkit";
import { clientReducer } from "../reducer/reducer";

export const store = configureStore({
    reducer: {
        clientReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})