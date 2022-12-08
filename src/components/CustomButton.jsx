import React from "react";
import styled from "styled-components";

const CustomButton = ({ name, color, onClick }) => {
  return (
    <StButton backColor={color} onClick={onClick}>
      {name}
    </StButton>
  );
};

export default CustomButton;

const StButton = styled.button`
  width: 150px;
  height: 40px;

  font-size: medium;
  font-weight: bold;

  color: white;
  background-color: ${(props) => props.backColor};

  border: none;
  border-radius: 10px;
`;
