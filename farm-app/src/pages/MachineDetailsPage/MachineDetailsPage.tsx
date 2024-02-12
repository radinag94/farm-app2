import { formatDate } from "../../services/FormatDate";
import { useMachineDetailsLogic } from "./MachineDetailsPage.logic";
import {
  DetailItem,
  StyledMachineDetailsPage,
  HeaderContainer,
  AllDetailsContainer,
} from "./MachineDetailsPage.style";
import DeleteButton from "../../ui-elements/deleteButton";
import Button from "../../ui-elements/button";
import UserRoleHOC from "../../auth/userRoleHOC";
import { UpdateButton } from "../../ui-elements/button";

function MachineDetailsPage() {
  const {
    machineDetails,
    associatedFarm,
    handleDeleteMachine,
    handleUpdateMachine,
  } = useMachineDetailsLogic();

  return (
    <StyledMachineDetailsPage>
      <HeaderContainer>
        <h2>Machine Details</h2>
        <UserRoleHOC>
          <div>
            <UpdateButton color="#f4a259" onClick={handleUpdateMachine}>
              {"Update Machine"}
            </UpdateButton>
            <DeleteButton
              label={"Delete Machine"}
              onClick={handleDeleteMachine}
            ></DeleteButton>
          </div>
        </UserRoleHOC>
      </HeaderContainer>
      {machineDetails && (
        <AllDetailsContainer>
          <DetailItem>
            <span>Name:</span> {machineDetails.name}
          </DetailItem>
          <DetailItem>
            <span>Brand:</span> {machineDetails.brand}
          </DetailItem>
          <DetailItem>
            <span>Register Number:</span> {machineDetails.registerNumber}
          </DetailItem>
          <DetailItem>
            <span>Created At:</span>{" "}
            {machineDetails && formatDate(machineDetails.createdAt)}
          </DetailItem>
          <DetailItem>
            <span>Updated At:</span>{" "}
            {machineDetails && formatDate(machineDetails.createdAt)}
          </DetailItem>
          {associatedFarm && (
            <DetailItem>
              <span>Farm:</span> {associatedFarm.name}
            </DetailItem>
          )}
        </AllDetailsContainer>
      )}
    </StyledMachineDetailsPage>
  );
}

export default MachineDetailsPage;
