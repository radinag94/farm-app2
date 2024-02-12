import styled from "styled-components";

export const CountFieldContainer = styled.div`
  padding: 20px;
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: #40916c;
    padding-top: 20px;
    padding-left: 20px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  table-layout: fixed;

  @media (max-width: 768px) {
    border: 0;
  }
`;

export const StyledThead = styled.thead`
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

export const StyledTh = styled.th`
  background-color: #95ba64;
  color: white;
  text-align: left;
  padding: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledTd = styled.td`
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

export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #95ba64;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  justify-content: space-between;
  h2 {
    color: #40916c;
    font-weight: 900;
    font-size: 28px;
  }
  & > div {
    display: flex;
  }
`;
