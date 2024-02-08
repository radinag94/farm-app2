import UpdateFieldForm from "../../components/Forms/UpdateFieldForm/UpdateFieldForm";

import { useParams } from "react-router";

function UpdateFieldPage() {
  const { id } = useParams();
  return <>{id && <UpdateFieldForm id={id} />}</>;
}

export default UpdateFieldPage;
