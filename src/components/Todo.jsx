import React from "react";
import CustomButton from "./CustomButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Todo = ({ title, isDone, body, id, hard, handleDelte, doneTodo }) => {
  //  수정전: todo={todo} 객체 하나를 통으로 받으면 porps로 받아서 사용할때 todo.id, todo.프로퍼티 이런식으로 사용  수정후:  ...todo 로 넘겨준 porps를 각각 받아서 todo. 을안적어도됨   => 만약에 여기서 또 자식 porp으로 todo 를 넘겨줄 일이 생기면?
  // const navigate = useNavigate();
  // const {title, isDone, body, id,hard} = todo    => 구조 분해할당
  return (
    <StTodoCard>
      <div>
        {/* <button
          onClick={() => {
            navigate("/detail");
          }}
        >
          홈
        </button> */}
        <StTempBox>
          <Link to={`/detail/${id}`}>
            <h2>{title}</h2>
          </Link>
          <h5>{isDone ? "🎉".repeat(hard) : "🔥".repeat(hard)}</h5>
        </StTempBox>
        <div>{body}</div>
      </div>

      <StButtonBox>
        <CustomButton
          name="삭제!"
          color="#e35d5b"
          onClick={() => handleDelte(id)}
        ></CustomButton>
        <CustomButton
          color={isDone ? "#434343" : "#4b6cb7"}
          onClick={() => {
            doneTodo(id);
          }}
          name={isDone ? "취소" : "완료"}
        ></CustomButton>
      </StButtonBox>
    </StTodoCard>
  );
};

export default Todo;

const StTodoCard = styled.div`
  width: 300px;
  height: 190px;

  padding: 10px 20px;

  border: 4px solid #ffafbd;
  border-radius: 10px;
`;
const StButtonBox = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 40px;
`;

const StTempBox = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 30px;
`;
