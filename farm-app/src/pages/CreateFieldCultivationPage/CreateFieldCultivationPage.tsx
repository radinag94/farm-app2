import React from "react";
import CreateFieldCultivationForm from "../../components/Forms/CreateFieldCultivationForm/CreateFieldCultivationForm";
import { useParams } from "react-router";
import { CreateFieldCultivationPageHeader } from "./CreateFieldCultivationPage.style";

function CreateFieldCultivationPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <CreateFieldCultivationPageHeader>
        Create Field Cultivation
      </CreateFieldCultivationPageHeader>
      {id && <CreateFieldCultivationForm id={id} />}
    </>
  );
}

export default CreateFieldCultivationPage;
