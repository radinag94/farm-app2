import {
  HeaderContainer,
  Td,
  Table,
  Th,
  Tr,
  Thead,
  StyledGrowingPeriodDetailsPage,
} from "./GrowingPeriodDetailsPage.style";
import DeleteButton from "../../ui-elements/deleteButton";
import UserRoleHOC from "../../auth/userRoleHOC";
import { useGrowingPeriodDetailsLogic } from "./GrowingPeriodDetailsPage.logic";
import NoFieldProcessPage from "../NoFieldProcessPage/NoFieldProcessPage";
import { CreateCultivationButton } from "../../ui-elements/button";

function GrowingPeriodDetailsPage() {
  const {
    handleCreateFieldCultivation,
    handleDeleteProcess,
    handleDeleteGrowingPeriod,
    associatedCrop,
    machines,
    processTypes,
    isLoading,
    error,
    fieldProcesses,
  } = useGrowingPeriodDetailsLogic();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!fieldProcesses || fieldProcesses.length === 0)
    return <NoFieldProcessPage></NoFieldProcessPage>;

  return (
    <StyledGrowingPeriodDetailsPage>
      <HeaderContainer>
        <h2>Growing Period Details</h2>
        <UserRoleHOC>
          <div>
            <CreateCultivationButton
              onClick={handleCreateFieldCultivation}
              color="#86d538"
            >
              {"Create Cultivation"}
            </CreateCultivationButton>
            <DeleteButton
              onClick={handleDeleteGrowingPeriod}
              label="Delete Growing Period"
            ></DeleteButton>
          </div>
        </UserRoleHOC>
      </HeaderContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Crop Name</Th>
            <Th>Machine Name</Th>
            <Th>Process Type</Th>
            <UserRoleHOC>
              <Th></Th>
            </UserRoleHOC>
          </Tr>
        </Thead>
        <tbody>
          {fieldProcesses.map((process) => {
            const associatedMachine = machines.find(
              (machine) => machine.id === process.machineId
            );
            const associatedProcessType = processTypes.find(
              (processType) => processType.id === process.processTypeId
            );

            return (
              <Tr key={process.id}>
                <Td>
                  {process.pDate
                    ? new Date(process.pDate).toLocaleDateString()
                    : "Unknown"}
                </Td>
                <Td>{associatedCrop?.name || "Unknown"}</Td>
                <Td>{associatedMachine?.name || "Unknown"}</Td>
                <Td>{associatedProcessType?.type || "Unknown"}</Td>
                <UserRoleHOC>
                  <Td>
                    <DeleteButton
                      label="Delete"
                      onClick={() => handleDeleteProcess(process.id)}
                    ></DeleteButton>
                  </Td>
                </UserRoleHOC>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </StyledGrowingPeriodDetailsPage>
  );
}

export default GrowingPeriodDetailsPage;
