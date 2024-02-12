import {
  CountFieldContainer,
  StyledTable,
  StyledThead,
  StyledTh,
  StyledTr,
  StyledTd,
  HeaderContainer,
} from ".//HomePage.style";
import { useHomePageLogic } from "./HomePage.logic";

function HomePage() {
  const { reportData, soilData, machineData } = useHomePageLogic();

  return (
    <>
      <HeaderContainer>
        <h2>Reports</h2>
      </HeaderContainer>
      <CountFieldContainer>
        <h3>Count of fields per farm and crops</h3>
        {reportData.length > 0 ? (
          <StyledTable>
            <StyledThead>
              <StyledTr>
                <StyledTh>Farm Name</StyledTh>
                <StyledTh>Crop Name</StyledTh>
                <StyledTh>Field Count</StyledTh>
              </StyledTr>
            </StyledThead>
            <tbody>
              {reportData.map((item, index) => (
                <StyledTr key={index}>
                  <StyledTd data-label="Farm Name">{item.farmname}</StyledTd>
                  <StyledTd data-label="Crop Name">{item.cropname}</StyledTd>
                  <StyledTd data-label="Field Count">
                    {item.fieldcount}
                  </StyledTd>
                </StyledTr>
              ))}
            </tbody>
          </StyledTable>
        ) : (
          <p>No report data availabable.</p>
        )}
        <h3>Most Common Soil Types</h3>
        {soilData.length > 0 ? (
          <StyledTable>
            <StyledThead>
              <StyledTr>
                <StyledTh>Farm Name</StyledTh>
                <StyledTh>Soil Type</StyledTh>
                <StyledTh>Count</StyledTh>
              </StyledTr>
            </StyledThead>
            <tbody>
              {soilData.map((item, index) => (
                <StyledTr key={index}>
                  <StyledTd data-label="Farm Name">{item.farmName}</StyledTd>
                  <StyledTd data-label="Soil Type">{item.soilType}</StyledTd>
                  <StyledTd data-label="Count">{item.soilTypeCount}</StyledTd>
                </StyledTr>
              ))}
            </tbody>
          </StyledTable>
        ) : (
          <p>No soil data available.</p>
        )}
        <h3>Farms with most machines</h3>
        {machineData.length > 0 ? (
          <StyledTable>
            <StyledThead>
              <StyledTr>
                <StyledTh>Farm Name</StyledTh>
                <StyledTh></StyledTh>
                <StyledTh>Count</StyledTh>
              </StyledTr>
            </StyledThead>
            <tbody>
              {machineData.map((item, index) => (
                <StyledTr key={index}>
                  <StyledTd data-label="Farm Name">{item.farmName}</StyledTd>
                  <StyledTd></StyledTd>
                  <StyledTd data-label="Count">{item.machineCount}</StyledTd>
                </StyledTr>
              ))}
            </tbody>
          </StyledTable>
        ) : (
          <p>No soil data available.</p>
        )}
      </CountFieldContainer>
    </>
  );
}

export default HomePage;
