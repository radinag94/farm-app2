import styled from "styled-components";

export const StyledCropsPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 8px;
    }

    input {
      padding: 8px;
      margin-bottom: 16px;
    }

    button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background-color: #ff6347; 
        color: #fff;
        border: none;
        padding: 8px 16px;
        cursor: pointer;
        transition: background-color 0.3s;

        @media (max-width: 600px) {
          padding: 6px 12px;
        }

        &:hover {
          background-color: #cc4731; 
        }
      }
    }
  }
`;
