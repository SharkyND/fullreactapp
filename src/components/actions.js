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

export const DONE_TODO = "DONE_TODO";

export const doneTodo = (element) => ({
  type: DONE_TODO,
  payload: { element },
});

export const LOADS_TODOS_IN_PROGRESS = "LOADS_TODOS_IN_PROGRESS";

export const loadingTodosInProgress = () => ({
  type: LOADS_TODOS_IN_PROGRESS,
});

export const LOADS_TODOS_SUCCESSFUL = "LOADS_TODOS_SUCCESSFUL";

export const loadingTodosSucessful = (todos) => ({
  type: LOADS_TODOS_SUCCESSFUL,
  payload: { todos },
});

export const LOADS_TODOS_FAILURE = "LOADS_TODOS_FAILURE";

export const loadingTodosFailure = () => ({
  type: LOADS_TODOS_FAILURE,
});
