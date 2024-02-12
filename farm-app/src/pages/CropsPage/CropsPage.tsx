import {
  CropImage,
  CropInput,
  CropInputContainer,
  ImageWithCropsContainer,
  StyledCropsPage,
} from "./CropsPage.style";
import { CreateStyledButton } from "../../ui-elements/button";
import { useCropsLogic } from "./CropsPage.logic";
import { CropPageHeader } from "./CropsPage.style";
import imageSrc from "../../images/david-becker-R6LKOgXaNJg-unsplash.jpg";
import DeleteButton from "../../ui-elements/deleteButton";
import UserRoleHOC from "../../auth/userRoleHOC";
function CropsPage() {
  const {
    crops = [],
    createCrop,
    handleDeleteCrop,
    newCropName,
    setNewCropName,
  } = useCropsLogic();

  return (
    <StyledCropsPage>
      <CropPageHeader>Crops Page</CropPageHeader>
      <ImageWithCropsContainer>
        <CropImage src={imageSrc}></CropImage>
        <CropInputContainer>
          <UserRoleHOC>
            <CropInput
              type="text"
              id="newCropName"
              value={newCropName}
              onChange={(e) => setNewCropName(e.target.value)}
            />

            <CreateStyledButton type="button" onClick={createCrop}>
              Create Crop
            </CreateStyledButton>
          </UserRoleHOC>
          <ul>
            {crops.map((crop) => (
              <li key={crop.id}>
                {crop.name}
                <UserRoleHOC>
                  <DeleteButton
                    label="Delete"
                    onClick={() => handleDeleteCrop(crop.id)}
                  ></DeleteButton>
                </UserRoleHOC>
              </li>
            ))}
          </ul>
        </CropInputContainer>
      </ImageWithCropsContainer>
    </StyledCropsPage>
  );
}

export default CropsPage;
