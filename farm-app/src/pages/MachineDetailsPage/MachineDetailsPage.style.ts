import styled from "styled-components";
export const StyledMachineDetailsPage = styled.div`
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

export const DetailItem = styled.p`
  color: #333;
  font-size: 16px;
  padding: 5px;
  span {
    font-weight: bold;
  }
`;

export const AllDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  }
  & > div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    align-items: flex-end;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
