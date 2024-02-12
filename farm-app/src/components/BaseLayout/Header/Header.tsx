import { navItems } from "./Header.static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LogOutButton } from "../../../ui-elements/button";
import {
  StyledNav,
  RightNavList,
  LeftNavList,
  StyledNavLink,
  NavItem,
  Hamburger,
  MobileNavList,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  LogoutLink,
  UserInfo,
} from "./Header.style";
import useHeaderLogic from "./Header.logic";

export const Header = () => {
  const {
    toggleMobileMenu,
    toggleDropdown,
    handleLogout,
    isAuthenticated,
    user,
    setIsOpen,
    isOpen,
  } = useHeaderLogic();

  if (isAuthenticated && window.location.pathname !== "/") {
    return (
      <StyledNav>
        <Hamburger onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <LeftNavList>
          {navItems.map((item) => (
            <NavItem key={item.name}>
              <StyledNavLink to={item.path}>{item.name}</StyledNavLink>
            </NavItem>
          ))}
        </LeftNavList>
        <MobileNavList $isOpen={isOpen}>
          {navItems.map((item) => (
            <NavItem key={item.name}>
              <StyledNavLink to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </StyledNavLink>
            </NavItem>
          ))}
          <LogOutButton onClick={handleLogout} color="#96db80">
            LOG OUT
          </LogOutButton>
        </MobileNavList>
        <RightNavList>
          <DropdownMenu>
            <DropdownItem onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} />
              <DropdownContent>
                {user && (
                  <>
                    <UserInfo>{user.email}</UserInfo>
                    <UserInfo>{user.role}</UserInfo>
                    <hr />
                  </>
                )}
                <LogoutLink href="/" onClick={handleLogout}>
                  LOG OUT
                </LogoutLink>
              </DropdownContent>
            </DropdownItem>
          </DropdownMenu>
        </RightNavList>
      </StyledNav>
    );
  } else {
    return null;
  }
};
export default Header;
