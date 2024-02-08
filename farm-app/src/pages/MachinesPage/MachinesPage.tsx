import EmptyList from "../../components/EmptyList/EmptyListMessage";
import { MachinePageContainer } from "./MachinesPage.style";
import Button from "../../ui-elements/button";
import MachineCard from "./MachineCard/MachineCard";
import { useMachineLogic } from "./MachinesPage.logic";

function Machine() {
  const {
    machines = [],
    handleCreateMachine,
    isLoading,
    isError,
  } = useMachineLogic();
  return (
    <MachinePageContainer>
      <Button
        label="Create Machine"
        color="#afb2ad"
        onClick={handleCreateMachine}
      ></Button>
      <h2>Machine List</h2>
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
  );
}

export default Machine;
