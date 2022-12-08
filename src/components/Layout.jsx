// src/shared/Layout.js

import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <div>My Todo List</div>
      <div>React</div>
    </StContainer>
  );
};

function Footer() {
  return (
    <StFooter>
      <span>copyright @서강산</span>
    </StFooter>
  );
}

function Layout({ children }) {
  return (
    <Stlayout>
      <Header />
      {children}
      <Footer />
    </Stlayout>
  );
}

export default Layout;

const StFooter = styled.div`
  width: 100%;
  height: 70px;

  font-size: 15px;

  background-color: black;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;

const StContainer = styled.div`
  height: 70px;

  font-size: 30px;
  font-weight: bold;

  background-color: black;
  color: white;

  display: flex;
  justify-content: space-between; /* 메인축 방향정렬 */
  align-items: center; /* 수직축 방향 정렬  */

  padding: 0 20px 0 20px;
  margin-bottom: 15px; /* 바깥 여백 헤더와 form 태그 사이 간격  */

  border-radius: 10px;
`;

const Stlayout = styled.div`
  max-width: 1200px;
  min-width: 800px;

  margin: auto;
`;
