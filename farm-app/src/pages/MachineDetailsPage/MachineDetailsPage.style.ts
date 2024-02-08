import styled from "styled-components";
export const DetailsContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  font-family: Arial, sans-serif;
  width: auto;
`;

export const DetailItem = styled.p`
  color: #333;
  margin: 10px 0;
  font-size: 16px;

  span {
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  color: #50be00;
  text-align: center;
  margin-bottom: 20px;
`;

export const UpdateButton = styled.button`
  background-color: #2abb29d4;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #1b701ad4;
  }
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #1b701ad4;
  }
`;
