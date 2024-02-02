import EmptyList from "../../components/EmptyList/EmptyListMessage";
import { useMachines } from "../../hooks/useMachines";
import { useFarms } from "../../hooks/useFarms";
import { HomePageContainer } from "./HomePage.style";

function HomePage() {
  // const fields = useFields();
  const machines = useMachines();
  const farms = useFarms();

  return (
    <HomePageContainer>
      {/* <h2>Field List</h2>
      {fields.length > 0 ? (
        fields.map((field) => (
          <div key={field.id}>
            <strong>{field.name}</strong>
            <p>Coordinates: {flattenCoordinates(field.shape.coordinates)}</p>
          </div>
        ))
      ) : (
        <EmptyList message="No fields available. Create a field to get started!" />
      )} */}
      {/* <h2>Machine List</h2>
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
              <p>Farm ID: {machine.farmId}</p>
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
      )} */}
      <h2>Reports</h2>
    </HomePageContainer>
  );
}

export default HomePage;
