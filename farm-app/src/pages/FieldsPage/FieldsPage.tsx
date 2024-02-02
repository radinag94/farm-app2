import React from "react";
import { FieldFormData } from "../../components/Forms/FieldForm/FieldForm";
import FieldForm from "../../components/Forms/FieldForm/FieldForm";
import { FieldPageContainer } from "./FieldsPage.style";
import { useFields } from "../../hooks/useFields";
import { flattenCoordinates } from "../HomePage/HomePage.logic";
import EmptyList from "../../components/EmptyList/EmptyListMessage";
import FieldCard from "./FieldCard/FieldCard";


function FieldPage() {
  const fields = useFields();
  const handleFormSubmit = (fieldData: FieldFormData) => {
    console.log("field submitted", fieldData.error);
  };
  return (
    <>
      <FieldPageContainer>
        <h2>Field List</h2>
        {fields.length > 0 ? (
          fields.map((field) => (
            <FieldCard key={field.id} field={field}></FieldCard>
          ))
        ) : (
          <EmptyList message="No fields available. Create a field to get started!" />
        )}

        <FieldForm onSubmit={handleFormSubmit}></FieldForm>
      </FieldPageContainer>
      
    </>


  );
}

export default FieldPage;
