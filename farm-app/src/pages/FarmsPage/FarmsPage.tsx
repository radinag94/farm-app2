import FarmCard from "./FarmCard/FarmCard";
import EmptyList from "../../components/EmptyList/EmptyListMessage";
import FarmForm from "../../components/Forms/FarmForm/FarmForm";
import Button from "../../ui-elements/button";
import {
  FarmPageContainer,
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
    farms=[],
    handleCreateFarm,
    isLoading,
    isError,
  } = useFarmsPageLogic();

  console.log(farms)
  return (
    <FarmPageContainer>
      <Button
        label="Create Farm"
        color="#afb2ad"
        onClick={handleCreateFarm}
      ></Button>
      <h2>Your Farms</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error loading farms.</p>
      ) : farms.length > 0 ? (
        farms.map((farm) => <FarmCard key={farm.id} farm={farm} />)
      ) : (
        <EmptyList message="No farms available. Create a farm to get started!" />
      )}
    </FarmPageContainer>
  );
}

export default FarmPage;
