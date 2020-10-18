import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, doneTodo } from "./actions";
//you can import the css later
import { connect } from "react-redux"; //its a higher order function

//Very important to put {} because you are deconstructing it from the props..
const TodoList = ({ todos = [], onRemoveClicked, onDoneClicked }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((element) => (
        <TodoListItem
          todo={element}
          onRemoveClicked={onRemoveClicked}
          onDoneClicked={onDoneClicked}
          key={element.text}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveClicked: (text) => dispatch(removeTodo(text)),
  onDoneClicked: (element) => dispatch(doneTodo(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
