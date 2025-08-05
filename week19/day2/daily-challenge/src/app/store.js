import {configureStore} from "@reduxjs/toolkit";
import categoriesReducer from '../features/categories/categorySlice.js'
import tasksReducer from '../features/tasks/taskSlice.js'

export default configureStore({
    reducer: {
        categories: categoriesReducer,
        tasks: tasksReducer
    }
})