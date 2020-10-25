import React from "react";
import styled from "styled-components";
//you can import the css later

//function to mark when it is done
const lineThorugh = (element) => {
  if (element.isCompleted === true) return { textDecoration: "line-through" };
  else return { color: "#696969" };
};

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

// this is the way of extending the style component, and using the logic in it
const TodoItemContainerWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    new Date(props.createdAt) > new Date(Date.now())
      ? "none"
      : "2px solid red"};
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const CompletedButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`;

const MarkDoneButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #1e90ff;
`;

const RemoveButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const PadingTime = styled.p`
  padding: 25px 50px 75px 100px;
`;

const TodoListItem = ({ todo, onRemoveClicked, onDoneClicked }) => {
  const Cotainer = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWarning;

  return (
    <Cotainer createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <PadingTime>
        Created at: {new Date(todo.createdAt).toLocaleDateString()}
      </PadingTime>
      <ButtonsContainer>
        {todo.isCompleted === false ? (
          <MarkDoneButton
            className="completed-button"
            onClick={() => onDoneClicked(todo)}
          >
            Mark As Done
          </MarkDoneButton>
        ) : (
          <CompletedButton
            className="completed-button"
            onClick={() => onDoneClicked(todo)}
          >
            Click to Change Status
          </CompletedButton>
        )}
        <RemoveButton
          className="remove-button"
          onClick={() => onRemoveClicked(todo)}
        >
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Cotainer>
  );
};

export default TodoListItem;
