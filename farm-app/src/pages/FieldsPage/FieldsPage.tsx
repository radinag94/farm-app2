import {
  FieldPageContainer,
  CreateNewFieldButton,
  HeaderContainer,
} from "./FieldsPage.style";
import EmptyList from "../../components/EmptyList/EmptyListMessage";
import FieldCard from "./FieldCard/FieldCard";
import { useFieldPageLogic } from "./FieldsPage.logic";
import UserRoleHOC from "../../auth/userRoleHOC";

function FieldPage() {
  const { fields, handleCreateField, isLoading, isError } = useFieldPageLogic();
  return (
    <>
      <HeaderContainer>
        <h2>Your Fields</h2>
        <UserRoleHOC>
          <div>
            <CreateNewFieldButton onClick={handleCreateField}>
              Create New Field
            </CreateNewFieldButton>
          </div>
        </UserRoleHOC>
      </HeaderContainer>
      <FieldPageContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error loading fields.</p>
        ) : fields && fields.length > 0 ? (
          fields.map((field) => (
            <FieldCard key={field.id} field={field}></FieldCard>
          ))
        ) : (
          <EmptyList message="No fields available. Create a field to get started!" />
        )}
      </FieldPageContainer>
    </>
  );
}

export default FieldPage;
