import {
  loadingTodosInProgress,
  loadingTodosSucessful,
  loadingTodosFailure,
  createTodo,
  doneTodo,
  removeTodo,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadingTodosInProgress());
    /*await fetch("http://localhost:5000/todos/").then((reponse) => {
      const todos = reponse.json();
      dispatch(loadingTodosSucessful(todos));
    });*/
    const reponse = await fetch("http://localhost:5000/todos");
    const todos = await reponse.json();
    dispatch(loadingTodosSucessful(todos));
    //.then((todos) => dispatch(loadingTodosSucessful(todos)));
  } catch (e) {
    dispatch(loadingTodosFailure);
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => alert(text);

export const addTodoRequest = (texts) => async (dispatch) => {
  try {
    const body = JSON.stringify({ texts });
    console.log(body, "Geeting tezt");
    const reponse = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        Origin: "http://localhost:3000/",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ text: texts }),
    });
    const todo = await reponse.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const markDoneRequest = (element) => async (dispatch) => {
  try {
    const text = element._id;
    const path_to_send = "http://localhost:5000/todos/" + text + "/completed";
    const reponse = await fetch(path_to_send, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const todo = await reponse.json();
    dispatch(doneTodo(todo));
    console.log(todo);
    //dispatch(loadTodos());
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const deleteElementRequest = (element) => async (dispatch) => {
  try {
    const text = element._id;
    const path_to_send = "http://localhost:5000/todos/" + text;
    const reponse = await fetch(path_to_send, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const reply = await reponse.json();
    console.log(reply);

    dispatch(removeTodo(element._id));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};
