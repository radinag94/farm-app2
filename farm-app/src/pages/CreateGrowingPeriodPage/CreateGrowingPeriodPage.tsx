import React from "react";
import CreateGrowingPeriodForm from "../../components/Forms/CreateGrowingPeriodForm/CreateGrowingPageForm";
import { useParams } from "react-router";
import { CreateGrowingPeriodPageHeader } from "./CreateGrowingPeriodPage.style";
function CreateGrowingPeriodPage() {
  const { id } = useParams();
  return (
    <>
      <CreateGrowingPeriodPageHeader>
        Create New Growing Period
      </CreateGrowingPeriodPageHeader>
      {id && <CreateGrowingPeriodForm id={id} />}
    </>
  );
}

export default CreateGrowingPeriodPage;
