import React from "react";
import { useFieldCultivations } from "../components/hooks/useFieldCultivations";
import { useFields } from "../components/hooks/useFields";
import { useCrops } from "../components/hooks/useCrops";
import { useProcessTypes } from "../components/hooks/useProcessTypes";
import { useGrowingPeriods } from "../components/hooks/useGrowingPeriods";
import { useMachines } from "../components/hooks/useMachines";
import EmptyList from "../components/EmptyList/EmptyListMessage";
import GrowingPeriodService from "../components/growing-period/GrowingPeriodService";
import { useFarms } from "../components/hooks/useFarms";

function FieldCultivation() {
  const fields = useFields();
  const crops = useCrops();
  const growingPeriods = useGrowingPeriods();
  const processTypes = useProcessTypes();
  const machines = useMachines();
  const fieldCultivations = useFieldCultivations();
  const farms = useFarms()

  return (
    <>
      {fieldCultivations.length > 0 ? (
        fieldCultivations.map((cultivation) => {
          const associatedMachine = machines.find(
            (machine) => machine.id === cultivation.machineId
          );

          const associatedProcessType = processTypes.find(
            (processType) => processType.id === cultivation.processTypeId
          );

          const associatedGrowingPeriod = growingPeriods.find(
            (period) => period.id === cultivation.growingPeriodId
          );
          const associatedField = fields.find(
            (field) => field.id === associatedGrowingPeriod?.fieldId
          );

          const associatedCrop = crops.find(
            (crop) => crop.id === associatedGrowingPeriod?.cropId
          );

          const associatedFarm = farms.find(
            (farm) => farm.id === associatedField?.farmId
          )

          return (
            <div key={cultivation.id}>
              <strong>Cultivation ID: {cultivation.id}</strong>
              <p>Machine Name: {associatedMachine?.name}</p>
              <p>Process Type: {associatedProcessType?.type}</p>
              Growing Period Information:
              {associatedGrowingPeriod && (
                <>
                  <p>Crop name: {associatedCrop?.name}</p>
                  <p>Field Name: {associatedField?.name}</p>
                  <p>Farm Name: {associatedFarm?.name}</p>
                </>
              )}
            </div>
          );
        })
      ) : (
        <EmptyList message="No field cultivations available." />
      )}
    </>
  );
}

export default FieldCultivation;
