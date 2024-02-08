import { useParams } from "react-router";
import UpdateFarmForm from "../../components/Forms/UpdateFarmForm/UpdateFarmForm";
function UpdateFarmPage() {
  const { id } = useParams();
  return <>{id && <UpdateFarmForm id={id} />}</>;
}

export default UpdateFarmPage;
