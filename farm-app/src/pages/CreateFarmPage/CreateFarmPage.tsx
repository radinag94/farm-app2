import React from "react";
import FarmForm from "../../components/Forms/FarmForm/FarmForm";
import { FarmFormData } from "../../components/statics/interfaces";
import { useNavigate } from "react-router";
import { CreatePageHeader } from "./CreateFarmPage.style";
import { useCreateFarmLogic } from "./CreateFarmPage.logic";

const CreateFarmPage = () => {
  const { handleFormSubmit } = useCreateFarmLogic();

  return (
    <div>
      <CreatePageHeader>Create New Farm</CreatePageHeader>
      <FarmForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateFarmPage;
