import React from "react";
import AddTodo from "../components/AddTodo";
import TodoBox from "../components/TodoBox";
import styled from "styled-components";

const Home = () => {
  return (
    <StLayout>
      <AddTodo></AddTodo>
      <TodoBox></TodoBox>
    </StLayout>
  );
};

export default Home;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;

  margin: auto;
  padding: 5px;
`;
