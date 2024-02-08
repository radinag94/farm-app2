import { useNavigate } from "react-router";
import { MachineFormData } from "../../components/statics/interfaces";

export const useCreateMachineLogic =() => {
    const navigate = useNavigate();
    const handleCreateMachineForm = (machineData: MachineFormData) => {
      console.log("Machine submitted:", machineData);
      navigate("/machine");
    };
    return {handleCreateMachineForm}
}


