import {configureStore} from "@reduxjs/toolkit";
import toDoListReducer from "../features/to-do-list/toDoListSlice.js";

export default configureStore({
    reducer: {
        toDoList: toDoListReducer
    }
})