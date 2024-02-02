import { FormData, LoginFormData } from './../components/statics/interfaces';


const apiUrl = "http://localhost:3000/auth";

const AuthService = {
  signup: async (formData: FormData) => {
    const response = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  },

  signin: async (loginFormData: LoginFormData) => {
    const response = await fetch(`${apiUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    });
    const data = await response.json();
    return data;
  },
};

export default AuthService;
