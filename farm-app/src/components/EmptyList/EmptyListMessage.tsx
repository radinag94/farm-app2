import React from "react";
import styled from "styled-components";

const EmptyListContainer = styled.div`
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

interface EmptyListProps {
  message: string;
}

const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
  return (
    <EmptyListContainer>
      <p>{message}</p>
    </EmptyListContainer>
  );
};

export default EmptyList;
