import styled from "styled-components";
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  table-layout: fixed;

  @media (max-width: 768px) {
    border: 0;
  }
`;

export const Thead = styled.thead`
  @media (max-width: 768px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const Th = styled.th`
  background-color: #95ba64;
  color: white;
  text-align: left;
  padding: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Td = styled.td`
  text-align: left;
  padding: 8px;
  border-top: 1px solid #ddd;

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    padding-left: 50%;
    position: relative;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-weight: bold;
      text-align: left;
    }
  }
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #95ba64;
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
  @media (max-width: 676px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
