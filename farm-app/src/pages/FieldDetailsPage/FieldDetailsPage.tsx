import { useFieldDetailsLogic } from "./FieldDetailsPage.logic";
import { StyledFieldDetailsPage } from "./FieldDetailsPage.style";
import { flattenCoordinates } from "../HomePage/HomePage.logic";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FarmData } from "../../components/statics/interfaces";
import FieldService from "../../services/FieldService";
import { useSoils } from "../../hooks/useSoils";
import SoilService from "../../services/SoilService";
import { useCrops } from "../../hooks/useCrops";
import CropService from "../../services/CropService";
import GrowingPeriodCard from "../GrowingPeriodCard/GrowingPeriodCard";
import {
  AssociatedStuff,
  SmallGrowingPeriodCardContainer,
} from "./FieldDetailsPage.style";
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
    associatedCrops,
    mostRecentGrowingPeriod,
    soilType,
    hasCrops,
  } = useFieldDetailsLogic();

  return (
    <StyledFieldDetailsPage>
      <h2>Field Details Page</h2>
      <button onClick={handleDeleteField}>Delete Field</button>
      <button onClick={handleUpdateField}>Update Field</button>
      {/* <button onClick={handleCreateFieldCultivation}>
        Create Field Cultivation
      </button> */}
      <button onClick={handleCreateGrowingPeriod}>Create Growing Period</button>
      {isLoading ? (
        <p className="loading">Loading farm details...</p>
      ) : error ? (
        <p className="error">Error loading farm details: {error.message}</p>
      ) : (
        fieldDetails && (
          <div>
            <p>Field Name: {fieldDetails.name}</p>
            <p>
              Location: {flattenCoordinates(fieldDetails.shape.coordinates)}
            </p>
            <div id="fieldMap" style={{ height: "400px", width: "100%" }}></div>
            <p>Soil Type: {soilType}</p>
            <p>Created At: {fieldDetails.createdAt}</p>
            <p>Updated At: {fieldDetails.updatedAt}</p>
            {associatedFarm && (
              <div>
                <p>Farm Name: {associatedFarm.name}</p>
              </div>
            )}
            {/* {hasCrops ? (
              <div>
                <p>Associated Crops:</p>
                <ul>
                  {associatedCrops &&
                    associatedCrops.map((crop, index) => (
                      <li key={index}>{crop.name}</li>
                    ))}
                </ul>
              </div>
            ) : (
              <p>No associated crops.</p>
            )} */}
            <h3>GrowingPeriods</h3>
            {mostRecentGrowingPeriod ? (
              <button onClick={handleViewAllGrowingPeriods}>
                View all growing periods
              </button>
            ) : (
              <p>No growing periods available.</p>
            )}
          </div>
        )
      )}
    </StyledFieldDetailsPage>
  );
};

export default FieldDetailsPage;
