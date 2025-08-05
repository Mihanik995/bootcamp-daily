import {createSelector} from "@reduxjs/toolkit";

export const selectTasksByCategory = createSelector(
    [
        state => state.tasks,
        (state, category) => category
    ],
    (tasks, category) => {
        return category
            ? tasks.filter(task => task.category === category)
            : tasks
    }
)

export const selectCompletedTasks = createSelector(
    [
        state => state.tasks,
    ],
    tasks => tasks.filter(task => task.completed === true)
)

export const selectCategoryById = createSelector(
    [
        state => state.categories,
        (state, id) => id
    ], (categories, id) => categories.filter(category => category.id === id)
)