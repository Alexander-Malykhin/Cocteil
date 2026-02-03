import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "@/store/modalSlice.js";

export const store = configureStore({
    reducer: {
        modal: modalReducer
    }
})