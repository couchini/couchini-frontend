import { createSlice } from "@reduxjs/toolkit";

const leftSideBarSlice = createSlice({
    name : "left_side_bar",
    initialState : {
        show : true ,
    },
    reducers : {
        changeLeftSideBar : (state,actions) => {
            state.show = actions.payload.show ;
        }
    }
});export default leftSideBarSlice.reducer; export const {
    changeLeftSideBar,
} = leftSideBarSlice.actions;