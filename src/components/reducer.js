// reducers is just a function named after the whatever redux store it is suppose to manage

// so whenever a action is fired a reducer is called that will update the state

import { REMOVE_TODO, CREATE_TODO, DONE_TODO } from "./actions";

//We want to set the initial state of the array to an empty array

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
      //This concat doesn't actually mutate the element
    }

    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((element) => element.text !== text);
    }

    case DONE_TODO: {
      const { element } = payload;
      return state.map((todo) => {
        if (todo !== element) return todo;
        else
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
      });
    }
    default: {
      return state;
      //These reducers will be called whenever any action is triggered
      // if no action is done here, we will still return the actual state
    }
  }
};
