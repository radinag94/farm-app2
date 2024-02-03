import { useFieldDetailsLogic } from "./FieldDetailsPage.logic";
import { StyledFieldDetailsPage } from "./FieldDetailsPage.style";
import { flattenCoordinates } from "../HomePage/HomePage.logic";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FarmData } from "../../components/statics/interfaces";
import FieldService from "../../services/FieldService";

const FieldDetailsPage: React.FC = () => {
  const { fieldDetails, handleDeleteField ,associatedFarm} = useFieldDetailsLogic();
  

  return (
    <StyledFieldDetailsPage>
      <h2>Field Details Page</h2>
      <button onClick={handleDeleteField}>Delete Field</button>
      {fieldDetails ? (
        <>
          <p>Field Name: {fieldDetails.name}</p>
          <p>Location: {flattenCoordinates(fieldDetails.shape.coordinates)}</p>
          <div id="fieldMap" style={{ height: "400px", width: "100%" }}></div>
          <p>Created At: {fieldDetails.createdAt}</p>
          <p>Updated At: {fieldDetails.updatedAt}</p>
          {associatedFarm && (
            <div>
              <p>Farm Name: {associatedFarm.name}</p>
            </div>
          )}
        </>
      ) : (
        <p className="loading">Loading farm details...</p>
      )}
    </StyledFieldDetailsPage>
  );
};

export default FieldDetailsPage;
