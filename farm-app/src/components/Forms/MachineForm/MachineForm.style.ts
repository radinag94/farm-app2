import styled from "styled-components";
export const MachineFormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    input {
      padding: 8px;
      margin-top: 5px;
    }
  }
`;