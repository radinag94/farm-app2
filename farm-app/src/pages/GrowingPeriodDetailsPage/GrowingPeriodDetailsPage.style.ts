import styled from "styled-components";
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #f0f0f0;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export const StyledGrowingPeriodDetailsPage = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  background-color: #e1efe4;
  border: none;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: 30px;
    color: #2c3e50;
    text-align: center;
  }

  .loading,
  .error {
    font-size: 20px;
    color: #e74c3c;
    margin-top: 20px;
    text-align: center;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    /* padding: 30px; */
    line-height: 1.5;
    color: #547b69de;
  }

  ul {
    list-style-type: none;
    margin-top: 20px;
    padding-left: 0;
    li {
      padding: 8px 0;
      border-bottom: 1px solid #ecf0f1;
    }
  }

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 20px;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  justify-content: space-between;
  h2 {
    color: #40916c;
    font-weight: 900;
    font-size: 28px;
    /* width: 100%; */
  }
  & > div {
    display: flex;
    gap: 10px;
  }
`;
