import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        phone : null
    },
    reducers : {
        changeUser : (state,actions) => {
            state.phone = actions.payload.phone;
        }
    }
});export default userSlice.reducer;export const {
    changeUser,
} = userSlice.actions;