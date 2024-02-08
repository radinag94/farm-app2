import { useProcessTypes } from "../../hooks/useProcessTypes";
import { useState } from "react";
import ProcessTypeService from "../../services/ProcessTypeService";
export const useProcessTypesLogic = () => {
  const {
    processTypes = [],
    fetchProcessTypes,
    isLoading,
    isError,
    error,
  } = useProcessTypes();
  const [newProcessType, setNewProcessType] = useState("");

  const createProcessType = async () => {
    try {
      await ProcessTypeService.createProcessType({
        type: newProcessType,
        id: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
      });
      setNewProcessType("");
      fetchProcessTypes();
    } catch (error) {
      console.error("Error creating process type", error);
    }
  };

  const handleDeleteProcessType = async (processTypeId: string) => {
    try {
      await ProcessTypeService.deleteProcessTypeById(processTypeId);
      fetchProcessTypes();
    } catch (error) {
      console.error("Error deleting process types:", error);
    }
  };
  return {
    processTypes,
    createProcessType,
    newProcessType,
    setNewProcessType,
    handleDeleteProcessType,
    isLoading,
    isError,
    error,
  };
};
