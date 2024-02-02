import { StyledFarmDetailsPage } from "./FarmDetailsPage.style";
import { useFarmDetailsLogic } from "./FarmDetailsPage.logic";
import { useFields } from "../../hooks/useFields";
import FieldCard from "../FieldsPage/FieldCard/FieldCard";
const FarmDetailsPage: React.FC = () => {
  console.log("FarmDetailsPage rendered"); 

  const { farmDetails, handleDeleteFarm } = useFarmDetailsLogic();
  const fields = useFields();
  const associatedFields = fields.filter((field) => field.farmId === farmDetails?.id);
  console.log(associatedFields)
  return (
    <StyledFarmDetailsPage>
      <h2>Farm Details Page</h2>
      <button onClick={handleDeleteFarm}>Delete Farm</button>
      {farmDetails ? (
        <>
          <p>Farm Name: {farmDetails.name}</p>
          <p>Location: {JSON.stringify(farmDetails.location)}</p>
          <p>Created At: {farmDetails.createdAt}</p>
          <p>Updated At: {farmDetails.updatedAt}</p>

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
