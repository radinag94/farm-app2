import { useParams } from "react-router";
import { useQuery } from "react-query";
import MachineService from "../../services/MachineService";
import { FarmData } from "../../components/statics/interfaces";
import { useNavigate } from "react-router";
export const useMachineDetailsLogic = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: machineDetails,
    isError: isMachineDetailsError,
    error: machineDetailsError,
  } = useQuery(
    ["machineDetails", id],
    () => {
      if (!id) throw new Error("Machine ID is undefined");
      return MachineService.fetchMachineById(id);
    },
    {
      enabled: !!id,
    }
  );

  const {
    data: associatedFarm,
    isError: isFarmError,
    error: farmError,
  } = useQuery<FarmData, Error>(
    ["associatedFarm", id],
    () => {
      if (!id) throw new Error("id is undefined");
      return MachineService.fetchFarmByMachineId(id);
    },
    {
      retry: 1,
    }
  );
  const handleUpdateMachine = () => {
    if (machineDetails && machineDetails.id) {
      const updatePath = `/machine/${machineDetails.id}/update-machine`;
      navigate(updatePath);
    }
  };

  const handleDeleteMachine = async () => {
    try {
      if (id) {
        await MachineService.deleteMachineById(id);
        navigate("/machine");
      }
    } catch (error) {
      console.error("Error deleting farm:", error);
    }
  };
  return {
    associatedFarm,
    machineDetails,
    handleDeleteMachine,
    handleUpdateMachine,
    isError: isMachineDetailsError || isFarmError,
    error: machineDetailsError || farmError,
  };
};
