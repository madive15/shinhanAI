import { AuthModel } from "~/shared/model/identification/identification.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthModel = {
    token: '',
    usedToken: '',
    refreshToken: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        change: (state, action) => {
            state.token = action.payload.accessToken
            state.usedToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        logout: (state) => {
            state.token = ''
            state.usedToken = ''
            state.refreshToken = ''
        },
        adjust: (state, action) => {
            state.usedToken = action.payload
        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;