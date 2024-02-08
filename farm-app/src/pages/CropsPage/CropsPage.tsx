import { StyledCropsPage } from "./CropsPage.style";
import { useCropsLogic } from "./CropsPage.logic";

function CropsPage() {
  const {
    crops = [],
    createCrop,
    handleDeleteCrop,
    newCropName,
    setNewCropName,
    isLoading,
    isError,
    error,
  } = useCropsLogic();

  return (
    <StyledCropsPage>
      <h2>Crops Page</h2>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error?.message || "An error occurred"}</p>}

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="newCropName">New Crop Name:</label>
        <input
          type="text"
          id="newCropName"
          value={newCropName}
          onChange={(e) => setNewCropName(e.target.value)}
        />
        <button type="button" onClick={createCrop}>
          Create Crop
        </button>
      </form>

      <ul>
        {crops.map((crop) => (
          <li key={crop.id}>
            {crop.name}
            <button onClick={() => handleDeleteCrop(crop.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </StyledCropsPage>
  );
}

export default CropsPage;
