import React from "react";
import { useNavigate } from "react-router-dom";
import { FarmCardProps } from "../../../components/statics/interfaces";
import {
  FarmCardContainer,
  FarmCardContent,
  FarmCardTitle,
  FarmImage,
} from "./FarmCard.style";

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/farm/${farm.id}`);
  };

  return (
    <>
    <FarmCardContainer onClick={() => handleClick()}>
      <FarmCardContent>
        <FarmCardTitle>{farm.name}</FarmCardTitle>
      </FarmCardContent>
      <FarmImage
        src="src/images/julian-scholl-HGJqVcbQLgk-unsplash.jpg"
        alt="Farm Image"
      />
     </FarmCardContainer>
    </>
  );
};

export default FarmCard;
