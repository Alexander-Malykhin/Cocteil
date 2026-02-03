import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isLoginOpen: true,
    },
    reducers: {
        openLoginModal: (state) => {
            state.isLoginOpen = true
        },
        closeLoginModal: (state) => {
            state.isLoginOpen = false
        }
    }
})

export const {openLoginModal, closeLoginModal} = modalSlice.actions

export default modalSlice.reducer