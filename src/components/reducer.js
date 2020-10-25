// reducers is just a function named after the whatever redux store it is suppose to manage

// so whenever a action is fired a reducer is called that will update the state

import { REMOVE_TODO, CREATE_TODO, DONE_TODO } from "./actions";

import {
  LOADS_TODOS_IN_PROGRESS,
  LOADS_TODOS_SUCCESSFUL,
  LOADS_TODOS_FAILURE,
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
};

/*
export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOADS_TODOS_IN_PROGRESS:
      return true;
    case LOADS_TODOS_SUCCESSFUL:
    case LOADS_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};
*/

//We want to set the initial state of the array to an empty array

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      /*const newTodo = {
        text,
        isCompleted: false,
      };*/
      //return state.concat(newTodo);
      return {
        ...state,
        data: state.data.concat(text),
      };
      //This concat doesn't actually mutate the element
    }

    case REMOVE_TODO: {
      const { text } = payload;
      return {
        ...state,
        data: state.data.filter((element) => element._id !== text),
      };
    }

    case DONE_TODO: {
      const { element } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo._id !== element._id) return todo;
          /*return {
            ...todo,
            isCompleted: element.isCompleted,
          };*/ else
            return element;
        }),
      };
    }
    case LOADS_TODOS_SUCCESSFUL: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }

    case LOADS_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOADS_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
    //These reducers will be called whenever any action is triggered
    // if no action is done here, we will still return the actual state
  }
};
