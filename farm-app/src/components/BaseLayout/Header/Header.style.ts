import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledNav = styled.nav`
  /* display: grid; */
  justify-content: space-between;
  align-items: center;
  background-color: #02804beb;
  color: #fff;
  padding: 1rem;

`;

export const RightNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  margin-left: auto;
  align-items: center;
  position: relative;
`;

export const LeftNavList = styled.ul`
  list-style: none;
  display: contents;
  margin: 0;
  padding: 0;
  margin-right: auto;
  /* position: relative; */
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  &.active {
    color: #000000;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
`;