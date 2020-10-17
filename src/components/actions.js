// every action is a json object with a type and payload
// but we will make it as a function

//This is an action creators --> so we dont have to write the action in the components

export const CREATE_TODO = "CREATE_TODO";

export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});
