import styled from "styled-components";
export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  justify-content: space-between;
  h2 {
    color: #40916c;
    font-weight: 900;
    font-size: 28px;
  }
  & > div {
    display: flex;
  }
`;