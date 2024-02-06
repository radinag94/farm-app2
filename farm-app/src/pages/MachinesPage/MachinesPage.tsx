import EmptyList from "../../components/EmptyList/EmptyListMessage";
import MachineForm from "../../components/Forms/MachineForm/MachineForm";
import { MachinePageContainer } from "./MachinesPage.style";
import { useMachineLogic } from "./MachinesPage.logic";

function Machine() {
  const { machines=[], farms=[], handleFormSubmit } = useMachineLogic();

  return (
    <MachinePageContainer>
      <h2>Machine List</h2>
      {machines.length > 0 ? (
        machines.map((machine) => {
          const associatedFarm = farms.find(
            (farm) => farm.id === machine.farmId
          );

          return (
            <div key={machine.id}>
              <strong>Name: {machine.name}</strong>
              <p>Brand: {machine.brand}</p>
              <p>Register Number: {machine.registerNumber}</p>
              {associatedFarm && (
                <div>
                  <p>Farm Name: {associatedFarm.name}</p>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <EmptyList message="No machines available. Create a machine to get started!" />
      )}
      <MachineForm onSubmit={handleFormSubmit}></MachineForm>
    </MachinePageContainer>
  );
}

export default Machine;
