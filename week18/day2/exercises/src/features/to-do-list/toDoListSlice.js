import {createSlice} from "@reduxjs/toolkit";
import uuid4 from "uuid4";

export const toDoListSlice = createSlice({
    name: 'counter',
    initialState: {
        list: [],
    },
    reducers: {
        add: (state, action) => {
            state.list.push({
                id: uuid4(),
                text: action.payload,
                completed: false
            })
        },
        markCompleted: (state, action) => {
            state.list
                .find(item => item.id === action.payload)
                .completed = true
        },
        remove: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        }
    }
})

export const {add, markCompleted, remove} = toDoListSlice.actions;
export default toDoListSlice.reducer;