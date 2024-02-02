import { FormData as SignUpFormData } from "../../components/Forms/SignUpForm/SignUpForm";
import { LoginFormData } from "../../components/Forms/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

import { routes } from "../../components/statics/routes";
import { useAuth } from "../../auth/AuthProvider";

interface LandingPageLogic {
  handleSignUpSubmit: (formData: SignUpFormData) => void;
  handleLoginSubmit: (formData: LoginFormData) => void;
}

const useLandingPageLogic = (): LandingPageLogic => {
  const navigate = useNavigate();
  const { 
    // loginUser,
    //  registerUser, 
     setIsAuthenticated } = useAuth();

  const handleSignUpSubmit = (formData: SignUpFormData) => {
    if (formData.password !== formData.confirmPass) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Sign Up form submitted:", formData);
    // registerUser(formData);
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
