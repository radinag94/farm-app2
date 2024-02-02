import React, { useState } from "react";
import styled from "styled-components";
import SignUpForm, {
  FormData as SignUpFormData,
} from "../../components/Forms/SignUpForm/SignUpForm";
import LoginForm, {
  LoginFormData,
} from "../../components/Forms/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import Button from "../../ui-elements/button";
import { routes } from "../../components/statics/routes";
import { useAuth } from "../../auth/AuthProvider";
import { LandingPageProps } from "../../components/statics/interfaces";
import {
  LandingPageContainer,
  ImageHalf,
  Image,
  FormHalf,
  TextAndButtons,
  LinkedForms,
} from "./LandingPage.style";
import useLandingPageLogic from "./LandindPage.logic";

const LandingPage: React.FC<LandingPageProps> = () => {
  const { handleSignUpSubmit, handleLoginSubmit } = useLandingPageLogic();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
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
