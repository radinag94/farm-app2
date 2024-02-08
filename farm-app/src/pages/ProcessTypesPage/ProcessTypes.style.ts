import styled from "styled-components";

export const ImageWithProcessTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
`;

export const ProcessTypePageHeader = styled.h2`
  color: #25c40c;
  padding: 20px;
  font-size: 24px;
  text-align: center;
`;

export const ProcessTypeListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProcessTypeImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ProcessTypeInputContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: 20px;
  padding: 30px;
  align-content: stretch;
  flex-wrap: nowrap;
  flex-direction: column;
  li {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ProcessTypeInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  border: 1px solid green;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const ProcessTypeButton = styled.button`
  padding: 10px;
  background-color: #25c40c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218e0f;
  }
`;

export const ProcessTypeDeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e03a3a;
  }
`;
