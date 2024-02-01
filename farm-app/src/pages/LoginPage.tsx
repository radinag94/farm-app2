import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Forms/LoginForm";
import { LoginFormData } from "../components/Forms/LoginForm";

interface LoginPageProps {}
const LoginPageContainer = styled.div`
  margin: 200px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 30%;
`;

const LoginPage: React.FC<LoginPageProps> = () => {
  const handleFormSubmit = (loginFormData: LoginFormData) => {
    console.log("Form submitted:", loginFormData);
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleFormSubmit} />
    </LoginPageContainer>
  );
};

export default LoginPage;
