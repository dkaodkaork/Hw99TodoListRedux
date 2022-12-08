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
        <h2>Working..🔥</h2>
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
        <h2>Done..!🎉</h2>
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
  gap: 10px; /* flex 아이템들의 간격 설정*/

  padding: 20px;
`;
const StTodoBox = styled.div`
  min-height: 300px; /* 최소높이값을 설정해서 박스들이 다 삭제되어도 Done...!이 올라오지않게 */

  display: flex;
  flex-wrap: wrap; /* 줄넘김 처리 설정  */
  gap: 20px;
`;
