import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOutButton } from "../../ui-elements/button";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Nav = styled.nav`
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

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }

  &.active {
    color: #000000;
  }
`;

const NavBar: React.FC = () => {
  const { authenticated, setIsAuthenticated, loading } = useAuth();
  const token = localStorage.getItem("accessToken");

  if (token) {
    setIsAuthenticated(!!token);
  } else {
    return <p>not auth</p>;
  }

  const navigate = useNavigate();
  console.log("authenticated", authenticated);

  const deleteToken = () => {
    localStorage.removeItem("accessToken");
  };

  const handleLogout = () => {
    deleteToken();
    navigate("/");
    console.log("the user logged out ");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Nav>
      <LeftNavList>
        {authenticated && (
          <>
            <NavItem>
              <NavLink to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/farm">Farm</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/field">Field</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/machine">Machine</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/field-cultivation">Field Cultivation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile-info">Profile</NavLink>
            </NavItem>
          </>
        )}
      </LeftNavList>
      <RightNavList>
        {!authenticated ? (
          <>
            <div>Logo</div>
          </>
        ) : (
          <LogOutButton onClick={handleLogout} color="#96db80">
            LOG OUT
          </LogOutButton>
        )}
      </RightNavList>
    </Nav>
  );
};

export default NavBar;
