import React from "react";
import { FieldFormData } from "../../components/statics/interfaces";
import FieldForm from "../../components/Forms/FieldForm/FieldForm";
import { FieldPageContainer } from "./FieldsPage.style";
import { useFields } from "../../hooks/useFields";
import EmptyList from "../../components/EmptyList/EmptyListMessage";
import FieldCard from "./FieldCard/FieldCard";
import Button from "../../ui-elements/button";
import { useNavigate } from "react-router";
import { useFieldPageLogic } from "./FieldsPage.logic";

function FieldPage() {
  const { fields, handleCreateField, isLoading, isError } = useFieldPageLogic();
  return (
    <>
      <FieldPageContainer>
        <Button
          label="Create Field"
          color="#afb2ad"
          onClick={handleCreateField}
        ></Button>
        <h2>Field List</h2>
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
