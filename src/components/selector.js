//The selectors are function that help us map data in the store, so we can place when when we need to connect the store with the component with connect map to store

//We have to install reselect to do use selectors for combinations and what not
import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

//So how createSelector works is that the it takes all selectors, and the last argument is what is returned for the new selector with logic
//createSelector also rememebers the output since its a pure function
export const getIncompleteTodos = createSelector(getTodos, (todos) => {
  return todos.filter((todo) => !todo.isCompleted);
});

export const getCompleteTodos = createSelector(getTodos, (todos) => {
  return todos.filter((todo) => todo.isCompleted);
});
