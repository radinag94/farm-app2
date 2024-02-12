import styled from "styled-components";
export const FieldCardContainer = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 15px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 30vw;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #d6dcd7;

  &:hover img {
    filter: brightness(70%);
  }

  &:hover::before {
    content: "See details";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 16px;
  }
`;
export const SmallFieldCardContainer = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  /* width: 20vw;  */
  /* height: 25vh;  */
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &:hover img {
    filter: brightness(70%);
  }
`;

export const FieldCardContent = styled.div`
  position: relative;
  color: #02804beb;
`;

export const FieldCardTitle = styled.h3`
  margin-bottom: 10px;
`;

export const FieldImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: filter 0.3s;
`;
