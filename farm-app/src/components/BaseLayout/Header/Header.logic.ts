import { useState, useEffect } from "react";
import { useAuth } from "../../../auth/AuthProvider";

import { useNavigate } from "react-router-dom";
const useHeaderLogic = () => {
  const { isAuthenticated, user, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("accessToken");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

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

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return {
    toggleMobileMenu,
    toggleDropdown,
    handleLogout,
    isAuthenticated,
    user,setIsOpen,isOpen
  };
};

export default useHeaderLogic;
