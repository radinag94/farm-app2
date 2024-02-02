import React from "react";
import styled from "styled-components";
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
