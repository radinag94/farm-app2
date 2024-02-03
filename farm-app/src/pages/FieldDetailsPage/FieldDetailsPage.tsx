
import { useFieldDetailsLogic } from "./FieldDetailsPage.logic";
import { StyledFieldDetailsPage } from "./FieldDetailsPage.style";
import { flattenCoordinates } from "../HomePage/HomePage.logic";
import { useFarms } from "../../hooks/useFarms";

const FieldDetailsPage: React.FC = () => {
  const { fieldDetails, handleDeleteField } =useFieldDetailsLogic()
  console.log('3333333render fields')
const farms= useFarms()
  const associatedFarms = farms.find(
    (farm) =>fieldDetails?.farmId  === farm.id
  );
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
          {associatedFarms && (
                <div>
                  <p>Farm Name: {associatedFarms.name}</p>
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