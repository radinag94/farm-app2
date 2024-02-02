import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/Forms/SignUpForm/SignUpForm";
import { FormData } from "../components/Forms/SignUpForm/SignUpForm";

interface SignUpPageProps {}

const SignUpPageContainer = styled.div`
  margin: 200px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 30%;
`;

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const handleFormSubmit = (formData: FormData) => {
    if (formData.password !== formData.confirmPass) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <SignUpPageContainer>
      <SignUpForm onSubmit={handleFormSubmit} />
    </SignUpPageContainer>
  );
};

export default SignUpPage;
