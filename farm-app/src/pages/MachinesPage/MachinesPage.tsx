import EmptyList from "../../components/EmptyList/EmptyListMessage";
import {
  MachinePageContainer,
  HeaderContainer,
  CreateNewMachineButton,
} from "./MachinesPage.style";
import MachineCard from "./MachineCard/MachineCard";
import { useMachineLogic } from "./MachinesPage.logic";
import UserRoleHOC from "../../auth/userRoleHOC";

function Machine() {
  const {
    machines = [],
    handleCreateMachine,
    isLoading,
    isError,
  } = useMachineLogic();
  return (
    <>
      <HeaderContainer>
        <h2>Your Machines</h2>
        <UserRoleHOC>
          <div>
            <CreateNewMachineButton onClick={handleCreateMachine}>
              Create New Machine
            </CreateNewMachineButton>
          </div>
        </UserRoleHOC>
      </HeaderContainer>
      <MachinePageContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error loading fields.</p>
        ) : machines && machines.length > 0 ? (
          machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine}></MachineCard>
          ))
        ) : (
          <EmptyList message="No machines available. Create a machine to get started!" />
        )}
      </MachinePageContainer>
    </>
  );
}

export default Machine;
