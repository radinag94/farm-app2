import {
  DeleteButton,
  SoilInputContainer,
  SoilImage,
  SoilPageHeader,
  ImageWithSoilsContainer,
  SoilInput,
  SoilButton,
} from "./SoilsPage.style";
import imageSrc from "../../images/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg";
import { useSoilsLogic } from "./SoilsPage.logic";

function SoilsPage() {
  const { soils, createSoil, handleDeleteSoil, newSoilType, setNewSoilType } =
    useSoilsLogic();

  return (
    <div>
      <SoilPageHeader>SoilsPage</SoilPageHeader>
      <ImageWithSoilsContainer>
        <SoilImage src={imageSrc} sizes="100px"></SoilImage>
        <SoilInputContainer>
          <ul>
            {soils.map((soil) => (
              <li key={soil.id}>
                {soil.type}
                <DeleteButton onClick={() => handleDeleteSoil(soil.id)}>
                  Delete
                </DeleteButton>
              </li>
            ))}
          </ul>
          <SoilInput
            type="text"
            placeholder="Enter new soil type"
            value={newSoilType}
            onChange={(e) => setNewSoilType(e.target.value)}
          />
          <SoilButton onClick={createSoil}>Create Soil</SoilButton>
        </SoilInputContainer>
      </ImageWithSoilsContainer>
    </div>
  );
}

export default SoilsPage;
