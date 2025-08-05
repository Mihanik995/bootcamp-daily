import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({...action.payload, id: uuid(), completed: false});
        },
        deleteTask: (state, action) => {
            const theTask = state.find(task => task.id === action.payload);
            if (theTask) {
                state.splice(state.indexOf(theTask), 1);
            }
        },
        editTask: (state, action) => {
            for (const key of Object.keys(action.payload)) {
                state.find(task => task.id === action.payload.id)[key] = action.payload[key];
            }
        },
        markCompleted: (state, action) => {
            state.find(task => task.id === action.payload).completed = true;
        }
    }
})

export const {addTask, deleteTask, editTask, markCompleted} = taskSlice.actions;

export default taskSlice.reducer;