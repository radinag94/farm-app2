import styled from "styled-components";

export const FarmPageContainer = styled.div`
  display: flex;
  align-items: center;
  /* margin: 20px; */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;
export const CreateNewFarmButton = styled.button`
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
