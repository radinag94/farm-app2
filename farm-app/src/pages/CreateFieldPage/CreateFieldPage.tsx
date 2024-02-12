import React from "react";
import { useCreateFieldLogic } from "./CreateFieldPage.logic";
import FieldForm from "../../components/Forms/FieldForm/FieldForm";
import { CreateFieldPageHeader } from "./CreateFieldPage.style";
function CreateFieldPage() {
  const { handleFormSubmit } = useCreateFieldLogic();

  return (
    <>
      <CreateFieldPageHeader>Create New Field</CreateFieldPageHeader>
      <FieldForm onSubmit={handleFormSubmit}></FieldForm>
    </>
  );
}

export default CreateFieldPage;
