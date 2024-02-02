import styled from "styled-components";

export const FarmPageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    color: #25c40c;
    margin-bottom: 20px;
    font-size: 24px;
    width: 100%;
    text-align: center;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentWrapper = styled.div`
  background: #fff;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.1);

`;