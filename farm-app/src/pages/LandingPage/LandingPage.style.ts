import styled from "styled-components";
export const LandingPageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;

export const ImageHalf = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 150px 150px 1 0;
`;

export const FormHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dee5d7;
`;

export const TextAndButtons = styled.div`
  margin-bottom: 20px;
`;

export const LinkedForms = styled.span`
  margin-bottom: 20px;
  color: green;
  cursor: pointer;
`;
