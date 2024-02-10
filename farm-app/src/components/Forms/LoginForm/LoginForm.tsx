import React from "react";
import { useFormik } from "formik";
import Input from "../../../ui-elements/input";
import AuthService from "../../../auth/authService";
import { useNavigate } from "react-router-dom";
import { LoginFormContainer } from "./LoginForm.style";
import { LoginFormProps, LoginFormValues } from "../../statics/interfaces";
import { loginValidationSchema } from "../../statics/form-validations";
import { LoginButton } from "../../../ui-elements/submitFormButton";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
      error: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const user = await AuthService.signin(values);
        onSubmit(user);
        resetForm();

        if (user && user.access_token) {
          localStorage.setItem("accessToken", user.access_token);
          navigate("/home");
        }
        alert("successful login");
      } catch (error) {
        console.log("Caught error in form submission:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        setFieldError("error", errorMessage);
        setSubmitting(false);
      }
    },
  });

  return (
    <LoginFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}

        <label htmlFor="password">Password:</label>
        <Input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
        {formik.errors.error && (
          <div className="error-message">{formik.errors.error}</div>
        )}
        <LoginButton
          color="#96db80"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {"Login"}
        </LoginButton>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
