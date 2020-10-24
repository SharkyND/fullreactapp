import React, { Component, useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, doneTodo } from "./actions";
import { loadTodos, deleteElementRequest } from "./thunks";
import { displayAlert, markDoneRequest } from "./thunks";
//you can import the css later
import { connect } from "react-redux"; //its a higher order function

//Very important to put {} because you are deconstructing it from the props..
const TodoList = ({
  isLoading = false,
  todos = [],
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
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((element) => (
        <TodoListItem
          todo={element}
          onRemoveClicked={onRemoveClicked}
          onDoneClicked={onDoneClicked}
          key={element._id}
        />
      ))}
    </div>
  );
  console.log(isLoading, "todos");
  return isLoading ? loadingContend : loadedContend;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startloadingTodo: () => dispatch(loadTodos()),
  onRemoveClicked: (element) => dispatch(deleteElementRequest(element)),
  onDoneClicked: (text) => dispatch(markDoneRequest(text)),
  onDisplayalertClick: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
