import React from "react";
import { useNavigate } from "react-router-dom";
import { FieldCardProps } from "../../../components/statics/interfaces";
import { FieldCardContainer,FieldCardContent,FieldCardTitle,FieldImage } from "./FieldCard.style";
const FieldCard: React.FC<FieldCardProps> = ({ field}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/field/${field.id}`);
  };

  return (
    <FieldCardContainer onClick={handleClick}>
      <FieldCardContent>
        <FieldCardTitle>{field.name}</FieldCardTitle>
      </FieldCardContent>
      <FieldImage
        src="src/images/federico-respini-sYffw0LNr7s-unsplash.jpg"
        alt="Field Image"
      />
    </FieldCardContainer>
  );
};

export default FieldCard;