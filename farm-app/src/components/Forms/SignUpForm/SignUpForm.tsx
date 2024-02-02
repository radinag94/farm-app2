import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../../../ui-elements/button";
import Input from "../../../ui-elements/input";
import AuthService from "../../../auth/authService";
import { SignUpFormProps } from "../../statics/interfaces";
import { FormData } from "../../statics/interfaces";
import { SignUpFormContainer } from "./SignUpForm.style";



const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPass: "",
  });

  // const navigate = useNavigate();
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

    if (formData.password === "") {
      setErrors({ ...errors, password: "Password can not be empty" });
      return;
    }
    if (formData.password.length < 5) {
      setErrors({ ...errors, password: "Password must be more than 4 characters" });
      return;
    }
    if (formData.password.length > 20) {
      setErrors({ ...errors, password: "Password must be less than 20 characters" });
      return;
    }


    if (formData.confirmPass === "") {
      setErrors({ ...errors, confirmPass: "Confirmation password can not be empty" });
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
      alert("Successful registration, now login with your account");
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
        {errors.password && <div>{errors.password}</div>}
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
