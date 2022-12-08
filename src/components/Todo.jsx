import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const Todo = ({ title, isDone, body, id, hard, handleDelte, doneTodo }) => {
  return (
    <StTodoCard>
      <div>
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
