import { StyledFarmDetailsPage } from "./FarmDetailsPage.style";
import { useFarmDetailsLogic } from "./FarmDetailsPage.logic";
import FieldCard from "../FieldsPage/FieldCard/FieldCard";
import { FarmDetailsContainer, HeaderContainer } from "./FarmDetailsPage.style";
import Button from "../../ui-elements/button";
import { StyledMapContainer } from "./FarmDetailsPage.style";
import { InfoContainer, ButtonsContainer } from "./FarmDetailsPage.style";
import { StyledMapWithInfoContainer } from "./FarmDetailsPage.style";
import { SmallFieldCardContainer } from "../FieldsPage/FieldCard/FieldCard.style";
import { AssociatedStuff } from "./FarmDetailsPage.style";
import "leaflet/dist/leaflet.css";
import { formatDate } from "../../services/FormatDate";
import DeleteButton from "../../ui-elements/deleteButton";
import { UpdateButton } from "../../ui-elements/button";
import UserRoleHOC from "../../auth/userRoleHOC";

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
    fieldsRef,
    machinesRef,
  } = useFarmDetailsLogic();

  return (
    <StyledFarmDetailsPage>
      {farmDetails ? (
        <FarmDetailsContainer>
          <HeaderContainer>
            <h2>Farm Details</h2>
            <UserRoleHOC>
              <div>
                <UpdateButton color="#f4a259" onClick={handleUpdate}>
                  {"Update Farm"}
                </UpdateButton>
                <DeleteButton
                  label="Delete farm"
                  onClick={handleDeleteFarm}
                ></DeleteButton>
              </div>
            </UserRoleHOC>
          </HeaderContainer>

          <p>{farmDetails.name}</p>

          <StyledMapWithInfoContainer>
            <StyledMapContainer
              id="map"
              style={{ height: "400px", width: "100%" }}
            ></StyledMapContainer>

            <InfoContainer>
              <p>
                Location coordnates:{" "}
                {JSON.stringify(farmDetails.location.coordinates)}
              </p>
              <p>
                Created At: {farmDetails && formatDate(farmDetails.createdAt)}
              </p>
              <p>
                Updated At: {farmDetails && formatDate(farmDetails.updatedAt)}
              </p>
              <ButtonsContainer>
                <Button
                  label="Show Associated Fields"
                  color="#f4e285"
                  onClick={toggleShowFields}
                ></Button>

                <Button
                  label="Show Associated Machines"
                  color="#68b0ab"
                  onClick={toggleShowMachines}
                ></Button>
              </ButtonsContainer>
            </InfoContainer>
          </StyledMapWithInfoContainer>

          {showFields && associatedFields?.length > 0 && (
            <div ref={fieldsRef}>
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
            <div ref={machinesRef}>
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
