import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        phone: null,
        is_login: false,
        return_login: false,
    },
    reducers: {
        changeUser: (state, actions) => {
            state.phone = actions.payload.phone;
            state.is_login = actions.payload.is_login;
            state.return_login = actions.payload.return_login;
        }
    }
}); export default userSlice.reducer; export const {
    changeUser,
} = userSlice.actions;