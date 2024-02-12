import styled from "styled-components";

export const StyledCreateFarmFormContainer = styled.div`
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
export const FarmFormContainer = styled.div`
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
    font-size: 19px;
    color: #0a432beb;

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
