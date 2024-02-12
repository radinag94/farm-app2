import styled from "styled-components";

export const StyledFarmDetailsPage = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  background-color: #e1efe4;

  p {
    font-size: 22px;
    font-weight: 600;
    padding: 30px;
    line-height: 1.5;
    color: #547b69de;
  }

  .loading {
    font-size: 18px;
    color: #888888;
  }
  h3 {
    text-align: center;
    padding: 20px;
    font-size: 18px;
  }
`;

export const FarmDetailsTitle = styled.div`
  color: #40916c;
  font-weight: 900;
  font-size: 28px;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

export const FarmDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  /* max-width: 1200px; */
  width: 100%;
`;

export const StyledMapContainer = styled.div`
  /* width: 80%; */
  /* height: 300px;
  position: relative; */
  border: 1px solid green;
  border-radius: 8px;

  @media (min-width: 600px) {
    height: 400px;
  }
`;

export const InfoContainer = styled.div`
  display: block;
  flex-direction: column;
  /* border: solid red; */
  padding: 10px;
  text-align: center;
  width: 70%;
  /* margin-left: 20px; */

  background-color: #9edca1;

  p {
    font-size: 18px;
    padding: 20px;
    line-height: 1;
    text-align: center;
  }
  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const StyledMapWithInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

export const AssociatedStuff = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
    gap: 10px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 20px;
`;
