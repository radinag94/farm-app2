import React from "react";
import styled from "styled-components";

interface DeleteButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: #bc4b51;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid transparent;
  /* margin: 10px 10px 0 0; */

  &:hover {
    background-color: #df767c;
  }
`;
export const DeleteMachineButton = styled(StyledButton)`
  width: 20vw;
  margin-top: 20px;
`;
const DeleteButton: React.FC<DeleteButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default DeleteButton;
