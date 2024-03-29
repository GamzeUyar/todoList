import React from "react";
import { ListGroup } from "react-bootstrap";

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  return (
    <div>
      <h1 className="text-center text-secondary">Todos</h1>
      <ListGroup className="w-50 d-flex mx-auto ">
        {todos.map((todo) => (
          <ListGroup.Item
            variant="success"
            role="button"
            className="m-2 text-capitalize rounded-5 d-flex justify-content-between animate__animated animate__slideInLeft "
            onDoubleClick={() => toggleTodo(todo.id)}
          >
            <span
              className={todo.completed ? "text-decoration-line-through" : ""}
            >
              {" "}
              {todo.text}{" "}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="red"
              role="button"
              className="bi bi-trash"
              viewBox="0 0 16 16"
              onClick={() => deleteTodo(todo.id)}
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
