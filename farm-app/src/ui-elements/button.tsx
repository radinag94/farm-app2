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
  border: 1px solid transparent;
`;

export const LogOutButton = styled(StyledButton)`
  margin-top: auto;
`;
export const CreateStyledButton = styled.button`
  padding: 10px;
  background-color: #0d7a3d;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0faf55;
  }
`;
export const UpdateButton = styled(StyledButton)`
  &:hover {
    background-color: #fbbc83;
  }
`;
export const CreateGrowingPeriodButton = styled(StyledButton)`
  &:hover {
    background-color: #81cec8;
  }
`;

export const ViewAllGrowingPeriodsButton = styled(StyledButton)`
  &:hover {
    background-color: #81ce8a;
  }
`
export const CreateCultivationButton = styled(StyledButton)`
   &:hover {
    background-color: #a0dd63;
  }
`

const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
