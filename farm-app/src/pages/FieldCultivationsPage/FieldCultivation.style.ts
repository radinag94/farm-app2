import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  border-radius: 10px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f9f9f9;
`;

export const StyledThead = styled.thead`
  background-color: #95ba64;
  color: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledTh = styled.th`
  padding: 15px 10px;
  text-align: left;
  font-weight: bold;

  @media (max-width: 768px) {
    display: block;
    padding: 5px;
  }
`;

export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    display: block;
    border-bottom: 2px solid #eee;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledTd = styled.td`
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    display: block;
    padding: 10px;
    text-align: right;

    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      color: #95ba64;
    }
  }
`;
