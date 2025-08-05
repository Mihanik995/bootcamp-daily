import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

export const categorySlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        addCategory: (state, action) => {
            state.push({...action.payload, id: uuid()})
        },
        editCategory: (state, action) => {
            for (const key of Object.keys(action.payload)) {
                state.find(category => category.id === action.payload.id)[key] = action.payload[key];
            }
        },
        deleteCategory: (state, action) => {
            delete state.find(category => category.id === action.payload.id)
        }
    }
})

export const {addCategory, deleteCategory, editCategory} = categorySlice.actions;

export default categorySlice.reducer;