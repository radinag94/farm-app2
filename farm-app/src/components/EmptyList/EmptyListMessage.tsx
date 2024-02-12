import React from "react";
import { EmptyListProps } from "../statics/interfaces";
import { EmptyListContainer } from "./EmptyListMessage.style";

const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
  return (
    <EmptyListContainer>
      <p>{message}</p>
    </EmptyListContainer>
  );
};

export default EmptyList;
