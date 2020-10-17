// reducers is just a function named after the whatever redux store it is suppose to manage

// so whenever a action is fired a reducer is called that will update the state

import { REMOVE_TODO, CREATE_TODO } from "./actions";

export const todos = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text: text,
        isCompleted: false,
      };
      return state.concat(newTodo);
      //This concat doesn't actually mutate the element
    }

    case REMOVE_TODO: {
      const { text } = payload;
    }
  }
  return state;
};
