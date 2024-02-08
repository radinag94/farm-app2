import MachineForm from "../../components/Forms/MachineForm/MachineForm";
import { useCreateMachineLogic } from "./CreateMachinePage.logic";


function CreateMachinePage() {
  const { handleCreateMachineForm } = useCreateMachineLogic();
  return <MachineForm onSubmit={handleCreateMachineForm}></MachineForm>;
}

export default CreateMachinePage;
