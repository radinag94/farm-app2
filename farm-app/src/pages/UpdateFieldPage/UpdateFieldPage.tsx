import UpdateFieldForm from "../../components/Forms/UpdateFieldForm/UpdateFieldForm";
import { UpdateFieldPageHeader } from "./UpdateFieldPage.style";
import { useParams } from "react-router";

function UpdateFieldPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <UpdateFieldPageHeader>Update Field</UpdateFieldPageHeader>
      {id && <UpdateFieldForm id={id} />}
    </>
  );
}

export default UpdateFieldPage;
