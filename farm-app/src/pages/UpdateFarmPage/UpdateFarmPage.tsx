import { useParams } from "react-router";
import { UpdateFarmPageHeader } from "./UpdateFarmPage.style";
import UpdateFarmForm from "../../components/Forms/UpdateFarmForm/UpdateFarmForm";
function UpdateFarmPage() {
  const { id } = useParams();
  return (
    <>
      <UpdateFarmPageHeader>Update Farm</UpdateFarmPageHeader>
      {id && <UpdateFarmForm id={id} />}
    </>
  );
}

export default UpdateFarmPage;
