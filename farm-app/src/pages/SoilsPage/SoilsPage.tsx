import {
  SoilInputContainer,
  SoilImage,
  SoilPageHeader,
  ImageWithSoilsContainer,
  SoilInput,
  SoilListItem,
  StyledSoilPage,
} from "./SoilsPage.style";
import imageSrc from "../../images/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg";
import { useSoilsLogic } from "./SoilsPage.logic";
import DeleteButton from "../../ui-elements/deleteButton";
import { CreateStyledButton } from "../../ui-elements/button";
import UserRoleHOC from "../../auth/userRoleHOC";

function SoilsPage() {
  const {
    soils = [],
    createSoil,
    handleDeleteSoil,
    newSoilType,
    setNewSoilType,
  } = useSoilsLogic();

  return (
    <StyledSoilPage>
      <SoilPageHeader>SoilsPage</SoilPageHeader>
      <ImageWithSoilsContainer>
        <SoilImage src={imageSrc} sizes="100px"></SoilImage>
        <SoilInputContainer>
          <UserRoleHOC>
            <SoilInput
              type="text"
              placeholder="Enter new soil type"
              value={newSoilType}
              onChange={(e) => setNewSoilType(e.target.value)}
            />
            <CreateStyledButton onClick={createSoil}>
              Create Soil
            </CreateStyledButton>
          </UserRoleHOC>
          <ul>
            {soils.map((soil) => (
              <SoilListItem key={soil.id}>
                {soil.type}
                <UserRoleHOC>
                  <DeleteButton
                    label="Delete"
                    onClick={() => handleDeleteSoil(soil.id)}
                  ></DeleteButton>
                </UserRoleHOC>
              </SoilListItem>
            ))}
          </ul>
        </SoilInputContainer>
      </ImageWithSoilsContainer>
    </StyledSoilPage>
  );
}

export default SoilsPage;
