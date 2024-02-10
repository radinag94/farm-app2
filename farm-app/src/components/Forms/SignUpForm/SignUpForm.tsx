import React from "react";
import Input from "../../../ui-elements/input";
import AuthService from "../../../auth/authService";
import { SignUpFormProps } from "../../statics/interfaces";
import { SignUpFormContainer } from "./SignUpForm.style";
import { useFormik } from "formik";
import { SignUpFormValues } from "../../statics/interfaces";
import { signUpValidationSchema } from "../../statics/form-validations";
import { LoginButton } from "../../../ui-elements/submitFormButton";

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      email: "",
      password: "",
      confirmPass: "",
      error: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      try {
        const user = await AuthService.signup(values);
        if (user.message) {
          throw new Error(user.message);
        }
        onSubmit(user);
        resetForm();
        alert("Signup successful, please login.");
      } catch (error) {
        console.log("Signup error:", error);
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
    <SignUpFormContainer>
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

        <label htmlFor="confirmPass">Confirm Password:</label>
        <Input
          type="password"
          name="confirmPass"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPass}
        />
        {formik.touched.confirmPass && formik.errors.confirmPass && (
          <div>{formik.errors.confirmPass}</div>
        )}

        {formik.errors.error && (
          <div className="error-message">{formik.errors.error}</div>
        )}

        <LoginButton
          type="submit"
          disabled={formik.isSubmitting}
          color="#96db80"
        >
          {"Sign Up"}
        </LoginButton>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
