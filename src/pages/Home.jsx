import React from "react";
import AddTodo from "../components/AddTodo";
import TodoBox from "../components/TodoBox";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <AddTodo></AddTodo>
      <TodoBox></TodoBox>
    </>
  );
};

export default Home;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;

  margin: auto;
  padding: 5px;
`;
