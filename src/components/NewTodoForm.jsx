import React, { useState } from "react";
import { connect } from "react-redux"; //its a higher order function
import { createTodo } from "./actions";
import { addTodoRequest } from "./thunks";
//you can import the css later

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your New Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicate = todos.some(
            (element) => element.text === inputValue
          );
          if (!isDuplicate) {
            console.log(inputValue, "kkkk");
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

//connect()(this is where we pass in the component we want to connect)

const mapStateToProps = (state) => ({
  todos: state.todos,
}); //job: is to take this state and return the properties from the state, the component needs access too // because of the connect, we have now access to the todos from the mapStateToProps function

//This will dispatch the action to the component as a prop
//Look at the way they are send.. like a object
const mapDispatchToProps = (dispatch) => ({
  //This properties of the object we returned will be passed to the component in props!!! Thats why they are objects!!!
  //dispatch is a function that triggers actio to which our redux store will respond too
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
