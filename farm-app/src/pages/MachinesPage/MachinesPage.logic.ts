import { useMachines } from "../../hooks/useMachines";
import { useNavigate } from "react-router";


export const useMachineLogic = () => {
  const { machines = [], isLoading, isError } = useMachines();
  const navigate = useNavigate();
  const handleCreateMachine = () => {
    navigate(`/machine/create-machine`);
  };

  return { machines ,handleCreateMachine,isLoading,isError };
};
