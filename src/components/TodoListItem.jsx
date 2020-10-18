import React from "react";
//you can import the css later

//function to mark when it is done
const lineThorugh = (element) => {
  if (element.isCompleted === true) return { textDecoration: "line-through" };
  else return { color: "#696969" };
};

const TodoListItem = ({ todo, onRemoveClicked, onDoneClicked }) => {
  return (
    <div className="todo-item-container" style={lineThorugh(todo)}>
      <h3>{todo.text}</h3>
      <div className="button-container">
        {todo.isCompleted === false ? (
          <button
            className="completed-button"
            onClick={() => onDoneClicked(todo)}
          >
            Mark As Done
          </button>
        ) : (
          <button
            className="completed-button"
            onClick={() => onDoneClicked(todo)}
          >
            Click to Change Status
          </button>
        )}
        <button
          className="remove-button"
          onClick={() => onRemoveClicked(todo.text)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
