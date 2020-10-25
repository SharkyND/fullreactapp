import React, { useState } from "react";
import { connect } from "react-redux"; //its a higher order function
import styled from "styled-components";
import { addTodoRequest } from "./thunks";
import { getTodos } from "./selector";
//you can import the css later

const NewTodoFormDiv = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewtodoformInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const Newtodoformbutton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <NewTodoFormDiv>
      <NewtodoformInput
        className="new-todo-input"
        type="text"
        placeholder="Type your New Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Newtodoformbutton
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
      </Newtodoformbutton>
    </NewTodoFormDiv>
  );
};

//connect()(this is where we pass in the component we want to connect)

const mapStateToProps = (state) => ({
  todos: getTodos(state),
}); //job: is to take this state and return the properties from the state, the component needs access too // because of the connect, we have now access to the todos from the mapStateToProps function

//This will dispatch the action to the component as a prop
//Look at the way they are send.. like a object
const mapDispatchToProps = (dispatch) => ({
  //This properties of the object we returned will be passed to the component in props!!! Thats why they are objects!!!
  //dispatch is a function that triggers actio to which our redux store will respond too
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
