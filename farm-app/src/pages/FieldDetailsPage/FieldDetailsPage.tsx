import { useFieldDetailsLogic } from "./FieldDetailsPage.logic";
import { StyledFieldDetailsPage } from "./FieldDetailsPage.style";
import { flattenCoordinates } from "../HomePage/HomePage.logic";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FarmData } from "../../components/statics/interfaces";
import FieldService from "../../services/FieldService";
import { useSoils } from "../../hooks/useSoils";
import SoilService from "../../services/SoilService";

const FieldDetailsPage: React.FC = () => {
  const { fieldDetails, handleDeleteField, associatedFarm, isLoading, error } =
    useFieldDetailsLogic();
  const { fetchSoils } = useSoils();
  const [soilType, setSoilType] = useState<string | null>(null);

  const { fieldId } = useParams<{ fieldId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchSoils();

        if (fieldDetails && fieldDetails.soilId) {
          try {
            const soilData = await SoilService.fetchSoilById(
              fieldDetails.soilId
            );
            setSoilType(soilData.type);
          } catch (error) {
            console.error("Error fetching soil", error);
            setSoilType("Soil Deleted");
          }
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [fieldDetails, fetchSoils]);

  return (
    <StyledFieldDetailsPage>
      <h2>Field Details Page</h2>
      <button onClick={handleDeleteField}>Delete Field</button>
      {isLoading ? (
        <p className="loading">Loading farm details...</p>
      ) : 
      error ? (
        <p className="error">Error loading farm details: {error.message}</p>
      ) : 
      fieldDetails ? (
        <>
          <p>Field Name: {fieldDetails.name}</p>
          <p>Location: {flattenCoordinates(fieldDetails.shape.coordinates)}</p>
          <div id="fieldMap" style={{ height: "400px", width: "100%" }}></div>
          <p>Soil Type: {soilType}</p>
          <p>Created At: {fieldDetails.createdAt}</p>
          <p>Updated At: {fieldDetails.updatedAt}</p>
          {associatedFarm && (
            <div>
              <p>Farm Name: {associatedFarm.name}</p>
            </div>
          )}
        </>
      ) : (
        <p>No field details available.</p>
      )}
    </StyledFieldDetailsPage>
  );
};

export default FieldDetailsPage;
