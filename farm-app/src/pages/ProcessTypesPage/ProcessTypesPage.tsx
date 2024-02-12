import React from "react";
import { useProcessTypesLogic } from "./ProcessTypes.logic";
import {
  ImageWithProcessTypeContainer,
  ProcessTypePageHeader,
  ProcessTypeListItem,
  ProcessTypeImage,
  ProcessTypeInputContainer,
  ProcessTypeInput,
  StyledProcessTypesPage,
} from "./ProcessTypes.style";
import imageSrc from "../../images/edoardo-busti-5ofKC-FQK3Q-unsplash.jpg";
import { CreateStyledButton } from "../../ui-elements/button";
import DeleteButton from "../../ui-elements/deleteButton";
import UserRoleHOC from "../../auth/userRoleHOC";
function ProcessTypesPage() {
  const {
    processTypes = [],
    createProcessType,
    newProcessType,
    setNewProcessType,
    handleDeleteProcessType,
  } = useProcessTypesLogic();

  return (
    <StyledProcessTypesPage>
      <ProcessTypePageHeader>Process Types Page</ProcessTypePageHeader>
      <ImageWithProcessTypeContainer>
        <ProcessTypeImage src={imageSrc} sizes="100px"></ProcessTypeImage>
        <ProcessTypeInputContainer>
          <UserRoleHOC>
            <ProcessTypeInput
              type="text"
              placeholder="Enter new process type"
              value={newProcessType}
              onChange={(e) => setNewProcessType(e.target.value)}
            />
            <CreateStyledButton onClick={createProcessType}>
              Create Soil
            </CreateStyledButton>
          </UserRoleHOC>
          <ul>
            {processTypes.map((processType) => (
              <ProcessTypeListItem key={processType.id}>
                {processType.type}
                <UserRoleHOC>
                  <DeleteButton
                    label="Delete"
                    onClick={() => handleDeleteProcessType(processType.id)}
                  ></DeleteButton>
                </UserRoleHOC>
              </ProcessTypeListItem>
            ))}
          </ul>
        </ProcessTypeInputContainer>
      </ImageWithProcessTypeContainer>
    </StyledProcessTypesPage>
  );
}

export default ProcessTypesPage;
