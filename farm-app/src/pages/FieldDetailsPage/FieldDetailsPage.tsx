import { useFieldDetailsLogic } from "./FieldDetailsPage.logic";
import {
  StyledFieldDetailsPage,
  HeaderContainer,
  FieldInfoContainer,
  CreateButtonContainer,
} from "./FieldDetailsPage.style";
import { flattenCoordinates } from "../HomePage/HomePage.logic";
import DeleteButton from "../../ui-elements/deleteButton";
import { formatDate } from "../../services/FormatDate";
import UserRoleHOC from "../../auth/userRoleHOC";
import { UpdateButton } from "../../ui-elements/button";
import { CreateGrowingPeriodButton } from "../../ui-elements/button";
import { ViewAllGrowingPeriodsButton } from "../../ui-elements/button";
const FieldDetailsPage = () => {
  const {
    fieldDetails,
    handleDeleteField,
    associatedFarm,
    isLoading,
    error,
    handleUpdateField,
    handleCreateGrowingPeriod,
    handleViewAllGrowingPeriods,
    mostRecentGrowingPeriod,
    soilType,
  } = useFieldDetailsLogic();

  return (
    <StyledFieldDetailsPage>
      <HeaderContainer>
        <h2>Field Details</h2>
        <UserRoleHOC>
          <div>
            <UpdateButton onClick={handleUpdateField} color="#f4a259">
              {"Update Field"}
            </UpdateButton>
            <DeleteButton
              onClick={handleDeleteField}
              label="Delete field"
            ></DeleteButton>
          </div>
        </UserRoleHOC>
      </HeaderContainer>

      {isLoading ? (
        <p className="loading">Loading farm details...</p>
      ) : error ? (
        <p className="error">Error loading farm details: {error.message}</p>
      ) : (
        fieldDetails && (
          <FieldInfoContainer>
            <p>Name: {fieldDetails.name}</p>
            <UserRoleHOC>
              <CreateButtonContainer>
                <CreateGrowingPeriodButton
                  onClick={handleCreateGrowingPeriod}
                  color="#68b0ab"
                >
                  {"Create Growing Period"}
                </CreateGrowingPeriodButton>
              </CreateButtonContainer>
            </UserRoleHOC>
            <p>
              Location: {flattenCoordinates(fieldDetails.shape.coordinates)}
            </p>
            <div id="fieldMap" style={{ height: "400px", width: "100%" }}></div>
            <p>Soil Type: {soilType}</p>
            <p>
              Created At: {fieldDetails && formatDate(fieldDetails.createdAt)}
            </p>
            <p>
              Updated At: {fieldDetails && formatDate(fieldDetails.updatedAt)}
            </p>
            {associatedFarm && (
              <div>
                <p>Farm: {associatedFarm.name}</p>
              </div>
            )}
            {mostRecentGrowingPeriod ? (
              <ViewAllGrowingPeriodsButton
                color="#7ae582"
                onClick={handleViewAllGrowingPeriods}
              >
                {"View All Growing Periods"}
              </ViewAllGrowingPeriodsButton>
            ) : (
              <p>No growing periods available.</p>
            )}
          </FieldInfoContainer>
        )
      )}
    </StyledFieldDetailsPage>
  );
};

export default FieldDetailsPage;
