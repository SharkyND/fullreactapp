import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
//you can import the css later

//Very important to put {} because you are deconstructing it from the props..
const TodoList = ({ todos = [{ text: "Hello" }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((element) => (
        <TodoListItem todo={element} />
      ))}
    </div>
  );
};

export default TodoList;
