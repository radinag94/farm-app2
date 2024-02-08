import React from "react";
import { useProcessTypesLogic } from "./ProcessTypes.logic";
import {
  ImageWithProcessTypeContainer,
  ProcessTypePageHeader,
  ProcessTypeListItem,
  ProcessTypeButton,
  ProcessTypeDeleteButton,
  ProcessTypeImage,
  ProcessTypeInputContainer,
  ProcessTypeInput,
} from "./ProcessTypes.style";
import imageSrc from "../../images/edoardo-busti-5ofKC-FQK3Q-unsplash.jpg";
function ProcessTypesPage() {
  const {
    processTypes = [],
    createProcessType,
    newProcessType,
    setNewProcessType,
    handleDeleteProcessType,
  } = useProcessTypesLogic();

  return (
    <div>
      <ProcessTypePageHeader>Process Types Page</ProcessTypePageHeader>
      <ImageWithProcessTypeContainer>
        <ProcessTypeImage src={imageSrc} sizes="100px"></ProcessTypeImage>
        <ProcessTypeInputContainer>
          <ul>
            {processTypes.map((processType) => (
              <ProcessTypeListItem key={processType.id}>
                {processType.type}
                <ProcessTypeDeleteButton
                  onClick={() => handleDeleteProcessType(processType.id)}
                >
                  Delete
                </ProcessTypeDeleteButton>
              </ProcessTypeListItem>
            ))}
          </ul>
          <ProcessTypeInput
            type="text"
            placeholder="Enter new process type"
            value={newProcessType}
            onChange={(e) => setNewProcessType(e.target.value)}
          />
          <ProcessTypeButton onClick={createProcessType}>
            Create Process Type
          </ProcessTypeButton>
        </ProcessTypeInputContainer>
      </ImageWithProcessTypeContainer>
    </div>
  );
}

export default ProcessTypesPage;
