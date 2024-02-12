import React from "react";
import { useNavigate } from "react-router";
import { GrowingPeriodCardProps } from "../../components/statics/interfaces";
import {
  GrowingPeriodCardContainer,
  GrowingPeriodCardContent,
  GrowingPeriodCardTitle,
  GrowingPeriodImage,
} from "./GrowingPeriodCard.style";
import fieldImg from "../../images/dan-meyers-IQVFVH0ajag-unsplash.jpg";

const GrowingPeriodCard: React.FC<GrowingPeriodCardProps> = ({
  growingPeriod,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      `/field/${growingPeriod.fieldId}/growing-period/${growingPeriod.id}`
    );
  };

  return (
    <GrowingPeriodCardContainer onClick={handleClick}>
      <GrowingPeriodCardContent>
        <GrowingPeriodCardTitle>
          {growingPeriod.createdAt}
        </GrowingPeriodCardTitle>
      </GrowingPeriodCardContent>
      <GrowingPeriodImage src={fieldImg} alt="Field Image" />
    </GrowingPeriodCardContainer>
  );
};

export default GrowingPeriodCard;
