import React, { Component, useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import styled from "styled-components";
import { loadTodos, deleteElementRequest } from "./thunks";
import { displayAlert, markDoneRequest } from "./thunks";
//you can import the css later
import { connect } from "react-redux"; //its a higher order function

import {
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos,
} from "./selector";

// using template literals is a tag function, check it out https://2ality.com/2016/11/computing-tag-functions.html
const BigRedText = styled.div`
  font-size: 44px;
  color: #ff0000;
`;

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

//Very important to put {} because you are deconstructing it from the props..
const TodoList = ({
  isLoading = false,
  completetodos,
  incompletetodos,
  onRemoveClicked,
  onDoneClicked,
  onDisplayalertClick,
  startloadingTodo,
}) => {
  useEffect(() => {
    startloadingTodo();
  }, []);

  const loadingContend = <div>Todo List Item Loading...</div>;
  const loadedContend = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletetodos.map((element) => (
        <TodoListItem
          todo={element}
          onRemoveClicked={onRemoveClicked}
          onDoneClicked={onDoneClicked}
          key={element._id}
        />
      ))}
      <h3>Complete:</h3>
      {completetodos.map((element) => (
        <TodoListItem
          todo={element}
          onRemoveClicked={onRemoveClicked}
          onDoneClicked={onDoneClicked}
          key={element._id}
        />
      ))}
    </ListWrapper>
  );
  console.log(isLoading, "todos");
  return isLoading ? loadingContend : loadedContend;
};

const mapStateToProps = (state) => ({
  completetodos: getCompleteTodos(state),
  incompletetodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startloadingTodo: () => dispatch(loadTodos()),
  onRemoveClicked: (element) => dispatch(deleteElementRequest(element)),
  onDoneClicked: (text) => dispatch(markDoneRequest(text)),
  onDisplayalertClick: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
