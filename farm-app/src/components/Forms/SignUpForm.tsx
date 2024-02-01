import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Button from "../../ui-elements/button";
import Input from "../../ui-elements/input";
import authHeader from "../../auth/authHeader";
import AuthService from "../../auth/authService";
import validateForm from "../hooks/useInputValidation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export interface SignUpFormProps {
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  email: string;
  password: string;
  confirmPass: string;
}

const SignUpFormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    input {
      padding: 8px;
      margin-top: 5px;
    }
   
  }
  div {
     color: #f54848;
     display: flex;
     margin: 5px;
    }
`;

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPass: "",
  });

  const navigate = useNavigate()
  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>(
    {}
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email === "") {
      setErrors({ ...errors, email: "Email can not be empty" });
      return;
    }
  
    if (formData.password !== formData.confirmPass) {
      setErrors({ ...errors, confirmPass: "Passwords do not match" });
      return;
    }
  
    try {
      const user = await AuthService.signup(formData);
      console.log("User:", user);
      onSubmit(formData);
      setFormData({ email: "", password: "", confirmPass: "" });
      alert('Successful registration, now login with your account')
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <SignUpFormContainer>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <Input
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="email"
        />
         {errors.email && <div>{errors.email}</div>}
        <label>Password:</label>
        <Input
          onChange={handleChange}
          value={formData.password}
          type="password"
          name="password"
        />
        <label>Confirm Password:</label>
        <Input
          onChange={handleChange}
          value={formData.confirmPass}
          type="password"
          name="confirmPass"
        />
            {errors.confirmPass && <div>{errors.confirmPass}</div>}
        <Button label="Sign Up" color="#96db80" />
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
