import styled from "styled-components";
export const StyledProcessTypesPage = styled.div`
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
    margin-bottom: 30px;
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
    color: #34495e;
    margin-bottom: 20px;
    line-height: 1.6;
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
export const ImageWithProcessTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  align-items: stretch;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  max-width: 350px;
  height: auto;
  border-radius: 30px;
  /* margin-bottom: 20px;
  padding: 20px; */
  @media (max-width: 768px) {
    max-height: 400px;
  }
`;

export const ProcessTypeInputContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: 20px;
  padding: 30px;
  align-content: stretch;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 50vw;

  ul {
    max-height: 300px;
    overflow-y: auto;
    padding-left: 0;
    margin-top: 20px;
    list-style-type: none;
  }

  li {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ecf0f1;
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

// export const ProcessTypeButton = styled.button`
//   padding: 10px;
//   background-color: #25c40c;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #218e0f;
//   }
// `;

// export const ProcessTypeDeleteButton = styled.button`
//   padding: 5px 10px;
//   background-color: #ff5c5c;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-left: 10px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #e03a3a;
//   }
// `;
