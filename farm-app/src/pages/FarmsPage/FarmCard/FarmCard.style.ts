import styled from "styled-components";
export const FarmCardContainer = styled.div`
 position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 40vw;
    height: 30vh;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

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
export const FarmCardContent = styled.div`
  position: relative;
  color: #02804beb; 
`;

export const FarmCardTitle = styled.h3`
  margin-bottom: 10px;
`;

export const FarmImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: filter 0.3s;
`;