import {createSlice} from "@reduxjs/toolkit";
import uuid4 from "uuid4";

export const toDoListSlice = createSlice({
    name: 'counter',
    initialState: {
        list: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
        },
    },
    reducers: {
        add: (state, action) => {
            state.list[action.payload.day].push({
                id: uuid4(),
                text: action.payload.text,
                completed: false
            })
        },
        markCompleted: (state, action) => {
            state.list[action.payload.day]
                .find(item => item.id === action.payload.id)
                .completed = true
        },
        remove: (state, action) => {
            state.list[action.payload.day] = state.list[action.payload.day]
                .filter(item => item.id !== action.payload.id)
        }
    }
})

export const {add, markCompleted, remove} = toDoListSlice.actions;
export default toDoListSlice.reducer;