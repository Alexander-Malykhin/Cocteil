import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "@/store/modalSlice.js";
import { authApi } from '@/api/authApi'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware)
})