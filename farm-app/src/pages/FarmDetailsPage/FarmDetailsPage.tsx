import { StyledFarmDetailsPage } from "./FarmDetailsPage.style";
import { useFarmDetailsLogic } from "./FarmDetailsPage.logic";
import FieldCard from "../FieldsPage/FieldCard/FieldCard";
import { FarmDetailsTitle } from "./FarmDetailsPage.style";
import { FarmDetailsContainer } from "./FarmDetailsPage.style";
import Button from "../../ui-elements/button";
import { StyledMapContainer } from "./FarmDetailsPage.style";
import { InfoContainer } from "./FarmDetailsPage.style";
import { StyledMapWithInfoContainer } from "./FarmDetailsPage.style";
import { SmallFieldCardContainer } from "../FieldsPage/FieldCard/FieldCard.style";
import { AssociatedStuff } from "./FarmDetailsPage.style";
import "leaflet/dist/leaflet.css";

const FarmDetailsPage: React.FC = () => {
  const {
    handleDeleteFarm,
    farmDetails,
    showFields,
    showMachines,
    associatedMachines = [],
    toggleShowFields,
    associatedFields = [],
    toggleShowMachines,
    handleUpdate,
  } = useFarmDetailsLogic();

  return (
    <StyledFarmDetailsPage>
      {farmDetails ? (
        <FarmDetailsContainer>
          <FarmDetailsTitle>Farm Details Page</FarmDetailsTitle>

          <Button
            label="Delete farm"
            color="#ef5353"
            onClick={handleDeleteFarm}
          ></Button>
          <Button
            label="Update Farm"
            color="#ffa726"
            onClick={handleUpdate}
          ></Button>
          <p>Farm Name: {farmDetails.name}</p>

          <p>Location: {JSON.stringify(farmDetails.location)}</p>
          <StyledMapWithInfoContainer>
            <StyledMapContainer
              id="map"
              style={{ height: "400px", width: "100%" }}
            ></StyledMapContainer>

            <InfoContainer>
              <p>Created At: {farmDetails.createdAt}</p>
              <p>Updated At: {farmDetails.updatedAt}</p>
              <Button
                label="Show Associated Fields"
                color="#64b5f6"
                onClick={toggleShowFields}
              ></Button>

              <Button
                label="Show Associated Machines"
                color="#66bb6a"
                onClick={toggleShowMachines}
              ></Button>
            </InfoContainer>
          </StyledMapWithInfoContainer>

          {showFields && associatedFields?.length > 0 && (
            <div>
              <h3>Associated Fields:</h3>
              <AssociatedStuff>
                {associatedFields.map((field) => (
                  <SmallFieldCardContainer key={field.id}>
                    <FieldCard key={field.id} field={field}></FieldCard>
                  </SmallFieldCardContainer>
                ))}
              </AssociatedStuff>
            </div>
          )}

          {showMachines && associatedMachines?.length > 0 && (
            <div>
              <h3>Associated Machines:</h3>
              {associatedMachines.map((machine) => (
                <div key={machine.id}>
                  <p>Machine register number : {machine.registerNumber}</p>
                </div>
              ))}
            </div>
          )}
        </FarmDetailsContainer>
      ) : (
        <p className="loading">Loading farm details...</p>
      )}
    </StyledFarmDetailsPage>
  );
};
export default FarmDetailsPage;
