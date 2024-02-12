import MachineForm from "../../components/Forms/MachineForm/MachineForm";
import { useCreateMachineLogic } from "./CreateMachinePage.logic";
import { CreateMachinePageHeader } from "./CreateMachinePage.style";

function CreateMachinePage() {
  const { handleCreateMachineForm } = useCreateMachineLogic();
  return (
    <>
      <CreateMachinePageHeader>Create Machine</CreateMachinePageHeader>
      <MachineForm onSubmit={handleCreateMachineForm}></MachineForm>
    </>
  );
}

export default CreateMachinePage;
