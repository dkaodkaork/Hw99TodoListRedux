import React from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../redux/modules/todos";

const TodoBox = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
    // console.log(id);
  };

  const doneTodoHandler = (id) => {
    dispatch(doneTodo(id));
  };

  // TodoBox.defaultProps = {
  //   todo: [],
  // };

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
                // todo={todo}
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
                // todo={todo} // (0) {...todo} 로 넘겨서 스프레드 연산자를 이용해서 todos 배열안의 객체원소 todo의 각 프로퍼티를의 key값을 하나씩 넘겨준다
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
