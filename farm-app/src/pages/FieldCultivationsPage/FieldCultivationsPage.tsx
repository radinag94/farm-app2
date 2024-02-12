import EmptyList from "../../components/EmptyList/EmptyListMessage";
import {
  TableContainer,
  StyledTable,
  StyledThead,
  StyledTh,
  StyledTr,
  StyledTd,
} from "./FieldCultivation.style";
import { useFieldCultivationLogic } from "./FieldCultivation.logic";
import { formatDate } from "../../services/FormatDate";

function FieldCultivation() {
  const {
    fields,
    crops,
    growingPeriods,
    processTypes,
    machines,
    fieldCultivations,
    farms,
  } = useFieldCultivationLogic();
  if (fieldCultivations.length === 0) {
    return <EmptyList message="No field cultivations available." />;
  }

  return (
    <TableContainer>
      <StyledTable>
        <StyledThead>
          <StyledTr>
            <StyledTh>Cultivation Date</StyledTh>
            <StyledTh>Machine Name</StyledTh>
            <StyledTh>Process Type</StyledTh>
            <StyledTh>Crop Name</StyledTh>
            <StyledTh>Field Name</StyledTh>
            <StyledTh>Farm Name</StyledTh>
          </StyledTr>
        </StyledThead>
        <tbody>
          {fieldCultivations.map((cultivation) => {
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
            );

            return (
              <StyledTr key={cultivation.id}>
                <StyledTd data-label="Cultivation Date">
                  {cultivation && formatDate(cultivation.pDate)}
                </StyledTd>
                <StyledTd data-label="Machine Name">
                  {associatedMachine?.name}
                </StyledTd>
                <StyledTd data-label="Process Type">
                  {associatedProcessType?.type}
                </StyledTd>
                <StyledTd data-label="Crop Name">
                  {associatedCrop?.name}
                </StyledTd>
                <StyledTd data-label="Field Name">
                  {associatedField?.name}
                </StyledTd>
                <StyledTd data-label="Farm Name">
                  {associatedFarm?.name}
                </StyledTd>
              </StyledTr>
            );
          })}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default FieldCultivation;
