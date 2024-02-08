import React from "react";
import { useCreateFieldLogic } from "./CreateFieldPage.logic";
import FieldForm from "../../components/Forms/FieldForm/FieldForm";
function CreateFieldPage() {
  const { handleFormSubmit } = useCreateFieldLogic();

  return <FieldForm onSubmit={handleFormSubmit}></FieldForm>;
}

export default CreateFieldPage;
