// src/pages/home.js
import React from "react";
import { useNavigate } from "react-router-dom"; // 어떤 버튼이나 component를 눌렀을 때 페이지로 이동하게 만들 때 사용하는 hook
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../components/CustomButton";
import AddTodo from "../components/AddTodo";

const Detail = () => {
  const navigate = useNavigate();
  const todolist = useSelector((state) => state.todos.todos);
  console.log(todolist);

  const param = useParams();
  const todo = todolist.find((value) => value.id === param.id);
  return (
    <StDetail>
      <StBox1>
        <div>ID: {todo.id}</div>
        <CustomButton
          onClick={() => navigate("/")}
          name="이전으로"
          color="#76c4b5"
        ></CustomButton>
      </StBox1>
      <div>
        <h1>{todo.title}</h1>
      </div>
      <div>
        <p>{todo.body}</p>
      </div>
    </StDetail>
  );
};

export default Detail;
const StDetail = styled.div`
  min-height: 500px;

  padding: 20px;
  margin: 15px;

  font-size: 25px;

  border: 2px solid gray;
`;

const StBox1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
