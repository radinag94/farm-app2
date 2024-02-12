import FarmCard from "./FarmCard/FarmCard";
import EmptyList from "../../components/EmptyList/EmptyListMessage";
import FarmForm from "../../components/Forms/FarmForm/FarmForm";
import Button from "../../ui-elements/button";
import { FarmPageContainer, HeaderContainer } from "./FarmsPage.style";
import { useFarmsPageLogic } from "./FarmsPage.logic";
import { CreateNewFarmButton } from "./FarmsPage.style";
import UserRoleHOC from "../../auth/userRoleHOC";
function FarmPage() {
  const {
    farms = [],
    handleCreateFarm,
    isLoading,
    isError,
  } = useFarmsPageLogic();

  return (
    <>
      <HeaderContainer>
        <h2>Your Farms</h2>
        <div>
          <UserRoleHOC>
            <CreateNewFarmButton onClick={handleCreateFarm}>
              Create New Farm
            </CreateNewFarmButton>
          </UserRoleHOC>
        </div>
      </HeaderContainer>
      <FarmPageContainer>
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
    </>
  );
}

export default FarmPage;
