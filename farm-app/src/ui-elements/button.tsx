import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  color: string;
  onClick: () => void;
}

const StyledButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  margin: 10px 10px 0 0 ;
  border: 1px solid transparent;
`;

export const LogOutButton = styled(StyledButton)`
  margin-top: auto;
`;


const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
