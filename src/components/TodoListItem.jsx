import React from "react";
//you can import the css later

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="button-container">
        <button className="completed-button">Mark As Done</button>
        <button className="completed-button">Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
