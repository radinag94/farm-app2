import React from "react";
import { HeaderContainer } from "./NoFieldProcessPage.style";
import UserRoleHOC from "../../auth/userRoleHOC";
import { useGrowingPeriodDetailsLogic } from "../GrowingPeriodDetailsPage/GrowingPeriodDetailsPage.logic";
import Button from "../../ui-elements/button";
import DeleteButton from "../../ui-elements/deleteButton";
import { StyledGrowingPeriodDetailsPage } from "../GrowingPeriodDetailsPage/GrowingPeriodDetailsPage.style";
import { CreateCultivationButton } from "../../ui-elements/button";

function NoFieldProcessPage() {
  const { handleCreateFieldCultivation, handleDeleteGrowingPeriod } =
    useGrowingPeriodDetailsLogic();
  return (
    <StyledGrowingPeriodDetailsPage>
      <HeaderContainer>
        <h2>Growing Period Details</h2>
        <UserRoleHOC>
          <div>
            <CreateCultivationButton
              onClick={handleCreateFieldCultivation}
              color="#86d538"
            >
              {"Create Cultivation"}
            </CreateCultivationButton>
            <DeleteButton
              onClick={handleDeleteGrowingPeriod}
              label="Delete Growing Period"
            ></DeleteButton>
          </div>
        </UserRoleHOC>
        <p>No field processes found for this growing period.</p>
      </HeaderContainer>
    </StyledGrowingPeriodDetailsPage>
  );
}

export default NoFieldProcessPage;
