import React, { useEffect } from "react";
import { useAuth } from "../../../auth/AuthProvider";
import { navItems } from "./Header.static";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { LogOutButton } from "../../../ui-elements/button";
import { useNavigate } from "react-router-dom";
import {
  StyledNav,
  RightNavList,
  LeftNavList,
  StyledNavLink,
  NavItem,
} from "./Header.style";

export const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token, setIsAuthenticated]);

  const deleteToken = () => {
    localStorage.removeItem("accessToken");
  };

  const handleLogout = () => {
    deleteToken();
    navigate("/");
    console.log("the user logged out ");
  };

  if (isAuthenticated && window.location.pathname !== "/") {
    return (
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
    );
  } else {
    return null;
  }
};

export default Header;
