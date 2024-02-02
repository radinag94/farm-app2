import React from "react";
import { useNavigate } from "react-router-dom";
import { FieldCardProps } from "../../../components/statics/interfaces";
import { FieldCardContainer,FieldCardContent,FieldCardTitle,FieldImage } from "./FieldCard.style";
import fieldImg from "../../../images/federico-respini-sYffw0LNr7s-unsplash.jpg"
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
        src={fieldImg}
        alt="Field Image"
      />
    </FieldCardContainer>
  );
};

export default FieldCard;