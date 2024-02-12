import styled from "styled-components";

export const StyledFieldDetailsPage = styled.div`
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
    /* margin-bottom: 30px; */
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

export const AssociatedStuff = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SmallGrowingPeriodCardContainer = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 20vw;
  height: 25vh;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &:hover img {
    filter: brightness(70%);
  }

  &:hover::before {
    content: "See details";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 16px;
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

export const FieldInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const CreateButtonContainer = styled.div`
  display: flex;
`;
