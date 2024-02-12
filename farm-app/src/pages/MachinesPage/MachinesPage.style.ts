import styled from "styled-components";
export const MachinePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export const CreateNewMachineButton = styled.button`
  padding: 10px;
  border-radius: 20px;
  color: white;
  background: #1b4332;

  &:hover {
    background-color: #52b788;
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
