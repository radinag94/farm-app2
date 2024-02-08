import { useMachineDetailsLogic } from "./MachineDetailsPage.logic";
import {
  DetailsContainer,
  DetailItem,
  Title,
  UpdateButton,
  DeleteButton,
} from "./MachineDetailsPage.style";

function MachineDetailsPage() {
  const {
    machineDetails,
    associatedFarm,
    handleDeleteMachine,
    handleUpdateMachine,
  } = useMachineDetailsLogic();

  return (
    <DetailsContainer>
      <Title>Machine Details</Title>
      {machineDetails && (
        <>
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
            <span>Created At:</span> {machineDetails.createdAt}
          </DetailItem>
          <DetailItem>
            <span>Updated At:</span> {machineDetails.updatedAt}
          </DetailItem>
        </>
      )}
      {associatedFarm && (
        <DetailItem>
          <span>Associated Farm:</span> {associatedFarm.name}
        </DetailItem>
      )}
      <UpdateButton onClick={handleUpdateMachine}>
        Update Machine Details
      </UpdateButton>
      <DeleteButton onClick={handleDeleteMachine}>Delete Machine</DeleteButton>
    </DetailsContainer>
  );
}

export default MachineDetailsPage;
