import styled from "styled-components";
export const UpdateFarmFormContainer = styled.div`
  max-width: 500px; 
  margin: 0 auto; 
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  border-radius: 8px; 

  form {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  label {
    width: 100%; 
    margin-bottom: 10px;
    margin-top: 20px; 
    display: flex;
    flex-direction: column; 
    align-items: center;

    input {
      width: 90%; 
      padding: 10px; 
      margin-top: 5px;
      border: 1px solid #ccc; 
      border-radius: 4px; 
    }
  }

  .error-message {
    color: red; 
    margin: 10px 0; 
  }

  @media (max-width: 768px) { 
    max-width: 90%;
    form {
      width: 100%; 
    }
    label input {
      width: calc(100% - 20px); 
    }
  }
`;