import { useMachines } from "./../../hooks/useMachines";
import { useFields } from "../../hooks/useFields";
import { useCrops } from "../../hooks/useCrops";
import { useGrowingPeriods } from "../../hooks/useGrowingPeriods";
import { useProcessTypes } from "../../hooks/useProcessTypes";
import { useFieldCultivations } from "../../hooks/useFieldCultivations";
import { useFarms } from "../../hooks/useFarms";

export const useFieldCultivationLogic = () => {
  const { fields = [] } = useFields();
  const { crops = [] } = useCrops();
  const { growingPeriods = [] } = useGrowingPeriods();
  const { processTypes = [] } = useProcessTypes();
  const { machines = [] } = useMachines();
  const fieldCultivations = useFieldCultivations();
  const { farms = [] } = useFarms();
  return {
    fields,
    crops,
    growingPeriods,
    processTypes,
    machines,
    fieldCultivations,
    farms,
  };
};
