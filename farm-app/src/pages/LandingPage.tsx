import React, { useState } from "react";
import styled from "styled-components";
import SignUpForm, { FormData as SignUpFormData } from "../components/Forms/SignUpForm";
import LoginForm, { LoginFormData } from "../components/Forms/LoginForm";
import { useNavigate } from "react-router-dom";
import Button from "../ui-elements/button";
import { routes } from "../components/statics/routes";
import { useAuth } from "../components/hooks/AuthProvider";

const LandingPageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;

const ImageHalf = styled.div`
  flex: 1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 150px 150px 1 0;
`;

const FormHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dee5d7;
`;

const TextAndButtons = styled.div`
  margin-bottom: 20px;
`;

const LinkedForms = styled.span`
  margin-bottom: 20px;
  color: green;
  cursor: pointer;
`;

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  const navigate = useNavigate();
  const { isAuthenticated ,loginUser,registerUser} = useAuth(); 

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignUpSubmit = (formData: SignUpFormData) => {
    if (formData.password !== formData.confirmPass) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Sign Up form submitted:", formData);
    registerUser(formData); 
  };

  const handleLoginSubmit = (formData: LoginFormData) => {
    loginUser(formData);
    navigate(routes.home);
  };

  const handleToggleSignUp = () => {
    setShowSignUp((prev) => !prev);
    setShowLogin(false);
  };

  const handleToggleLogin = () => {
    setShowLogin((prev) => !prev);
    setShowSignUp(false);
  };

  return (
    <>
      <LandingPageContainer>
        <ImageHalf>
          <Image
            src="./src/images/karsten-wurth-UbGYPMbMYP8-unsplash.jpg"
            alt="field-farm-background"
          />
        </ImageHalf>
        <FormHalf>
          <TextAndButtons>
            <p>Welcome to the newest AGRO APP</p>
            {!showSignUp && !showLogin && (
              <>
                <Button
                  label="Sign Up"
                  onClick={handleToggleSignUp}
                  color="#96db80"
                />
                <Button
                  label="Login"
                  onClick={handleToggleLogin}
                  color="#96db80"
                />
              </>
            )}
          </TextAndButtons>
          {showSignUp && (
            <>
              <h2>Sign Up</h2>
              <SignUpForm onSubmit={handleSignUpSubmit} />
              <p>
                Already have an account?{" "}
                <LinkedForms onClick={handleToggleLogin}>
                  Login here
                </LinkedForms>
              </p>
            </>
          )}
          {showLogin && (
            <>
              <h2>Login</h2>
              <LoginForm onSubmit={handleLoginSubmit} />
              <p>
                Don't have an account?{" "}
                <LinkedForms onClick={handleToggleSignUp}>
                  Sign Up here
                </LinkedForms>
              </p>
            </>
          )}
        </FormHalf>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
