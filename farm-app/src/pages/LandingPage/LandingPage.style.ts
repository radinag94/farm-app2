import styled from "styled-components";
export const LandingPageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;

export const ImageHalf = styled.div`
  flex: 1;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
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
  display: flex;
  flex-direction: column;
  p {
    font-weight: 900;
    color: #02804beb;
    padding: 20px;
    font-size: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export const LinkedForms = styled.span`
  margin-bottom: 20px;
  color: green;
  cursor: pointer;
  &:hover {
    color: #91d27c;
  }
`;
