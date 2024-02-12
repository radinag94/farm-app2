import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #02804beb;
  color: #fff;
  padding: 1.5rem;
`;

export const RightNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
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
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

type MobileNavListProps = {
  $isOpen: boolean;
};

export const MobileNavList = styled(RightNavList)<MobileNavListProps>`
  flex-direction: column;
  position: absolute;
  top: 58px;
  right: 0;
  background-color: #02804beb;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    z-index: 1;
  }
`;

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;

  & > a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #02804beb;
    }
  }
`;

export const DropdownItem = styled.div`
  &:hover ${DropdownContent} {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`;
export const LogoutLink = styled.a`
  color: #2fca48eb;
  cursor: pointer;
  padding: 10px;
  display: block;
  &:hover {
    color: darken(#2fca48eb, 10%);
  }
`;

export const UserInfo = styled.div`
  padding: 10px 20px;
  color: #333;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
