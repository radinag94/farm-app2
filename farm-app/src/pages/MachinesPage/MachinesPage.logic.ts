import { useMachines } from "../../hooks/useMachines";
import { useFarms } from "../../hooks/useFarms";
import { MachineFormData } from "../../components/statics/interfaces";


export const useMachineLogic = () => {
  const {machines }= useMachines();
  const {farms} = useFarms();

  const handleFormSubmit = (machineData: MachineFormData) => {
    console.log("field submitted", machineData.error);
  };

  return { machines, farms, handleFormSubmit };
};
