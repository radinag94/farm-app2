import styled from "styled-components";

export const StyledFieldDetailsPage = styled.div`
 max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #cce2d4d6;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 28px;
    color: #333333;
    margin-bottom: 20px;
    text-align: center;
  }

  button {
    margin: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  .loading,
  .error {
    font-size: 18px;
    margin-top: 20px;
    text-align: center;
  }

  p {
    font-size: 18px;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  ul {
    margin-top: 10px;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    max-width: 95%;
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

export const SmallGrowingPeriodCardContainer = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 20vw; /* Set a smaller width */
  height: 25vh; /* Set a smaller height */
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
