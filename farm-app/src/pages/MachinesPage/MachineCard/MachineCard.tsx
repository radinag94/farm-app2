import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MachineImage,
  MachineCardContainer,
  MachineCardContent,
  MachineCardTitle,
} from "./MachineCard.style";
import { MachineCardProps } from "../../../components/statics/interfaces";
import imageSrc from "../../../images/leslie-saunders-h6neAEgIKUY-unsplash.jpg";

const MachineCard: React.FC<MachineCardProps> = ({ machine }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/machine/${machine.id}`);
  };

  return (
    <>
      <MachineCardContainer onClick={() => handleClick()}>
        <MachineCardContent>
          <MachineCardTitle>{machine.name}</MachineCardTitle>
        </MachineCardContent>
        <MachineImage src={imageSrc} alt="Farm Image" />
      </MachineCardContainer>
    </>
  );
};

export default MachineCard;
