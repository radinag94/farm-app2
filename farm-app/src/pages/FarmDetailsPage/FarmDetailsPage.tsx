import { StyledFarmDetailsPage } from "./FarmDetailsPage.style";
import { useFarmDetailsLogic } from "./FarmDetailsPage.logic";
import { useFields } from "../../hooks/useFields";
import FieldCard from "../FieldsPage/FieldCard/FieldCard";
import { useMachines } from "../../hooks/useMachines";

import "leaflet/dist/leaflet.css";

const FarmDetailsPage: React.FC = () => {
  console.log("FarmDetailsPage rendered");

  const { farmDetails, handleDeleteFarm } = useFarmDetailsLogic();
  const fields = useFields();
  const machines = useMachines();
  const associatedFields = fields.filter(
    (field) => field.farmId === farmDetails?.id
  );
  console.log(associatedFields);
  const associatedMachines = machines.filter(
    (machine) => machine.farmId === farmDetails?.id
  );
  return (
    <StyledFarmDetailsPage>
      <h2>Farm Details Page</h2>
      <button onClick={handleDeleteFarm}>Delete Farm</button>
      {farmDetails ? (
        <>
          <p>Farm Name: {farmDetails.name}</p>

          <p>Location: {JSON.stringify(farmDetails.location)}</p>
          <div id="map" style={{ height: "400px", width: "100%" }}></div>
          <p>Created At: {farmDetails.createdAt}</p>
          <p>Updated At: {farmDetails.updatedAt}</p>

          {associatedMachines.length > 0 && (
            <div>
              <h3>Associated Machines:</h3>
              {associatedMachines.map((machine) => (
                <div key={machine.id}>
                  <p>Machine register number : {machine.registerNumber}</p>
                </div>
              ))}
            </div>
          )}

          {associatedFields.length > 0 && (
            <div>
              <h3>Associated Fields:</h3>
              {associatedFields.map((field) => (
                <FieldCard key={field.id} field={field}></FieldCard>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="loading">Loading farm details...</p>
      )}
    </StyledFarmDetailsPage>
  );
};
export default FarmDetailsPage;
