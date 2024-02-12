import { FormData as SignUpFormData } from "../../components/statics/interfaces";
import { LoginFormData } from "../../components/statics/interfaces";
import { useNavigate } from "react-router-dom";

import { routes } from "../../components/statics/routes";
import { useAuth } from "../../auth/AuthProvider";


const useLandingPageLogic = (): LandingPageLogic => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleSignUpSubmit = (formData: SignUpFormData) => {
    if (formData.password !== formData.confirmPass) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Sign Up form submitted:", formData);
  };

  const handleLoginSubmit = async () => {
    try {
      setIsAuthenticated(true);
      navigate(routes.home);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return {
    handleSignUpSubmit,
    handleLoginSubmit,
  };
};

export default useLandingPageLogic;
