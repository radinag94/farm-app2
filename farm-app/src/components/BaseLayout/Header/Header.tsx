import React, { useEffect } from "react";
import { useAuth } from "../../hooks/AuthProvider";
import { navItems } from "./Header.statis";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { LogOutButton } from "../../../ui-elements/button";
import { useNavigate } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #02804beb;
  color: #fff;
  padding: 1rem;
`;

const RightNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  margin-left: auto;
  align-items: center;
`;

const LeftNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  margin-right: auto;
`;

const StyledNavLink = styled(NavLink)`
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

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
`;

export const Header = () => {
 const {isAuthenticated,} = useAuth()
 console.log(isAuthenticated)
  const navigate = useNavigate();
  // const token = localStorage.getItem("accessToken");

  // useEffect(() => {
  //   if (token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, [token, setIsAuthenticated]);

  const deleteToken = () => {
    localStorage.removeItem("accessToken");
  };

  const handleLogout = () => {
    deleteToken();
    navigate("/");
    console.log("the user logged out ");
  };

  return isAuthenticated ? (
    <StyledNav>
      <LeftNavList>
        {navItems.map((item) => (
          <NavItem key={item.name}>
            <StyledNavLink to={item.path}>{item.name}</StyledNavLink>
          </NavItem>
        ))}
      </LeftNavList>
      <RightNavList>
        <LogOutButton onClick={handleLogout} color="#96db80">
          LOG OUT
        </LogOutButton>
      </RightNavList>
    </StyledNav>
  ) : null;
};

export default Header;
