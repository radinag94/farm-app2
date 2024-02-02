import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../../../ui-elements/button";
import Input from "../../../ui-elements/input";
import AuthService from "../../../auth/authService";
import { useNavigate } from "react-router-dom";
import { LoginFormData, LoginFormProps } from "../../statics/interfaces";
import { LoginFormContainer } from "./LoginForm.style";


const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    [key in keyof LoginFormData]?: string;
  }>({});

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginFormData.email === "") {
      setErrors({ ...errors, email: "Email can not be empty" });
      return;
    }

    if (loginFormData.password === "") {
      setErrors({ ...errors, password: "Password can not be empty" });
      return;
    }
    if (loginFormData.password.length < 5 || loginFormData.password.length > 20 ) {
      setErrors({ ...errors, password: "Password is not a valid length" });
      return;
    }
   
    try {
      const user = await AuthService.signin(loginFormData);
     
      if (user && user.access_token) {
        localStorage.setItem("accessToken", user.access_token);
      }
      console.log("User:", user);
      setLoginFormData({
        email: "",
        password: "",
      });
      navigate("/home");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <LoginFormContainer>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <Input
          onChange={handleChange}
          value={loginFormData.email}
          type="email"
          name="email"
        />
        {errors.email && <div>{errors.email}</div>}
        <label>Password:</label>
        <Input
          onChange={handleChange}
          value={loginFormData.password}
          type="password"
          name="password"
        />
        {errors.password && <div>{errors.password}</div>}
        <Button label="Login" color="#96db80" />
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
