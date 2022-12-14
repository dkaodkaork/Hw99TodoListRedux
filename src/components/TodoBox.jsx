import React from "react";
import Todo from "./Todo";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../redux/modules/todos";

const TodoBox = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const doneTodoHandler = (id) => {
    dispatch(doneTodo(id));
  };

  return (
    <StTodoList>
      <div>
        <h2>Working..π₯</h2>
      </div>

      <StTodoBox>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                handleDelte={deleteTodoHandler}
                doneTodo={doneTodoHandler}
                {...todo}
                key={todo.id}
              ></Todo>
            );
          } else {
            return null;
          }
        })}
      </StTodoBox>

      <div>
        <h2>Done..!π</h2>
      </div>

      <StTodoBox>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                handleDelte={deleteTodoHandler}
                doneTodo={doneTodoHandler}
                {...todo}
                key={todo.id}
              ></Todo>
            );
          } else {
            return null;
          }
        })}
      </StTodoBox>
    </StTodoList>
  );
};

export default TodoBox;

const StTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* flex μμ΄νλ€μ κ°κ²© μ€μ */

  padding: 20px;
`;
const StTodoBox = styled.div`
  min-height: 300px; /* μ΅μλμ΄κ°μ μ€μ ν΄μ λ°μ€λ€μ΄ λ€ μ­μ λμ΄λ Done...!μ΄ μ¬λΌμ€μ§μκ² */

  display: flex;
  flex-wrap: wrap; /* μ€λκΉ μ²λ¦¬ μ€μ   */
  gap: 20px;
`;
