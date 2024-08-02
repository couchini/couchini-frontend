import { configureStore } from "@reduxjs/toolkit";
import LeftSideBarSlice from "./reducers/leftSideBar";

const Store = configureStore({reducer: {
    left_side_bar : LeftSideBarSlice,
}});export default Store;