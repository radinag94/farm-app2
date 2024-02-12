import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import {
  FieldCultivationData,
  GrowingPeriodData,
} from "../../components/statics/interfaces";
import { useMachines } from "../../hooks/useMachines";
import { useProcessTypes } from "../../hooks/useProcessTypes";
import { useCrops } from "../../hooks/useCrops";
import FieldCultivationService from "../../services/FieldCultivationService";
import GrowingPeriodService from "../../services/GrowingPeriodService";

export const useGrowingPeriodDetailsLogic = () => {
  const { id: growingPeriodId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [fieldProcesses, setFieldProcesses] = useState<FieldCultivationData[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [growingPeriod, setGrowingPeriod] = useState<GrowingPeriodData | null>(
    null
  );
  const { machines = [] } = useMachines();
  const { processTypes = [] } = useProcessTypes();
  const { crops = [] } = useCrops();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (typeof growingPeriodId === "undefined") {
        console.error("growingPeriodId is undefined");
        setError("The growing period ID is missing.");
        setIsLoading(false);
        return;
      }

      try {
        const fieldProcessesData =
          await FieldCultivationService.fetchFieldCultivationsByGrowingPeriodId(
            growingPeriodId
          );
        const growingPeriodData =
          await GrowingPeriodService.fetchGrowingPeriodById(growingPeriodId);

        setFieldProcesses(fieldProcessesData);
        setGrowingPeriod(growingPeriodData);
      } catch (error) {
        console.error(error);
        setError(error.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [growingPeriodId]);
  const associatedCrop = crops.find(
    (crop) => crop.id === growingPeriod?.cropId
  );

  const fieldId = window.location.pathname.split("/")[2];

  const handleDeleteGrowingPeriod = async () => {
    try {
      if (growingPeriod?.id) {
        await FieldCultivationService.deleteFieldCultivationsByGrowingPeriodId(
          growingPeriod.id
        );
        await GrowingPeriodService.deleteGrowingPeriodById(growingPeriod.id);

        navigate(`/field/${fieldId}/growing-periods`);
      }
    } catch (error) {
      console.error("Error deleting growing period", error);
    }
  };
  const handleDeleteProcess = async (processId: string) => {
    try {
      await FieldCultivationService.deleteFiieldCultivationById(processId);

      const updatedProcesses = fieldProcesses.filter(
        (process) => process.id !== processId
      );
      setFieldProcesses(updatedProcesses);

      alert("Process deleted successfully.");
    } catch (error) {
      console.error("Error deleting process", error);
      alert("Failed to delete process.");
    }
  };
  const handleCreateFieldCultivation = () => {
    if (growingPeriod && growingPeriod.id) {
      const updatePath = `/field/${fieldId}/growing-period/${growingPeriod.id}/create-field-cultivation`;
      navigate(updatePath);
    }
  };

  return {
    handleCreateFieldCultivation,
    handleDeleteProcess,
    handleDeleteGrowingPeriod,
    associatedCrop,
    machines,
    processTypes,
    isLoading,
    error,fieldProcesses
  };
};
