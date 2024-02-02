import FarmCard from "./FarmCard/FarmCard";
import EmptyList from "../../components/EmptyList/EmptyListMessage";
import FarmForm from "../../components/Forms/FarmForm/FarmForm";
import Button from "../../ui-elements/button";
import {
  FarmPageContainer,
  ModalContentWrapper,
  ModalOverlay,
} from "./FarmsPage.style";
import { useFarmsPageLogic } from "./FarmsPage.logic";

export interface FarmData {
  id: string;
  name: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

function FarmPage() {
  const {
    farms,
    showModal,
    handleCreateFarm,
    handleFormSubmit,
    handleOverlayClick,
    modalRef,
  } = useFarmsPageLogic();

  return (
    <FarmPageContainer>
      <Button
        label="Create Farm"
        color="#afb2ad"
        onClick={handleCreateFarm}
      ></Button>
      <h2>Your Farms</h2>
      {farms.length > 0 ? (
        farms.map((farm) => <FarmCard key={farm.id} farm={farm} />)
      ) : (
        <EmptyList message="No farms available. Create a farm to get started!" />
      )}

      {showModal && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContentWrapper ref={modalRef}>
            <FarmForm onSubmit={handleFormSubmit} />
          </ModalContentWrapper>
        </ModalOverlay>
      )}
    </FarmPageContainer>
  );
}

export default FarmPage;
