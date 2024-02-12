import { FormData, LoginFormData } from "./../components/statics/interfaces";

const apiUrl = "http://localhost:3000/auth";

const AuthService = {
  signup: async (formData: FormData) => {
    try {
      const response = await fetch(`${apiUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during sign up :", error);
      throw error;
    }
  },

  signin: async (loginFormData: LoginFormData) => {
    try {
      const response = await fetch(`${apiUrl}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during login :", error);
      throw error;
    }
  },
};

export default AuthService;
