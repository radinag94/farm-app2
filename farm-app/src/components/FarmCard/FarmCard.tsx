import React from "react";
import styled from "styled-components";
import Button from "../../ui-elements/button";
import FarmDetail from "./FarmDetail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface FarmCardProps {
  farm: {
    id: string;
    name: string;
    location: {
      type: string;
      coordinates: [number, number];
    };
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}

const FarmCardContainer = styled.div`
 position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 40vw;
    height: 30vh;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

  &:hover img {
    filter: brightness(70%);
  }

  &:hover::before {
    content: "See details";
    display: flex;
    justify-content: center;  
    align-items: center;      
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;  
    font-size: 16px; 
  }
`;
const FarmCardContent = styled.div`
  position: relative;
  color: #02804beb; 
`;

const FarmCardTitle = styled.h3`
  margin-bottom: 10px;
`;

const FarmImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: filter 0.3s;
`;

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/farm/${farm.id}`);
  };

  return (
    <FarmCardContainer onClick={handleClick}>
      <FarmCardContent>
        <FarmCardTitle>{farm.name}</FarmCardTitle>
      </FarmCardContent>
      <FarmImage
        src="src/images/julian-scholl-HGJqVcbQLgk-unsplash.jpg"
        alt="Farm Image"
      />
    </FarmCardContainer>
  );
};

export default FarmCard; 