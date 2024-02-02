import { ReactNode, createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  isAuthenticated: boolean;
  // loginUser: (loginFormData: LoginFormData) => Promise<void>;
  // registerUser: (formData: FormData) => Promise<void>;
  setIsAuthenticated: (value: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  function isExpired(exp: number | undefined) {
    const currentTime = Date.now() / 1000;
    return exp < currentTime;
  }
  function isTokenValid(authToken: string) {
    try {
      const decodedToken = jwtDecode(authToken);
      return decodedToken && !isExpired(decodedToken.exp);
    } catch (error) {
      return false;
    }
  }
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const authToken = localStorage.getItem("accessToken");
    const isValid = authToken && isTokenValid(authToken);
    return isValid ? true : false;
  });

  // const loginUser = async (loginFormData: LoginFormData) => {
  //   const auth = await AuthService.signin(loginFormData);
  //   console.log(auth);

  //   if (auth.access_token) {
  //     localStorage.setItem("accessToken", auth.access_token);
  //     setIsAuthenticated(true);
  //   }
  // };

  // const registerUser = async (formData: FormData) => {
  //   const reg = await AuthService.signup(formData);
  //   console.log(reg);
  // if (reg.isSuccess !== false) {
  //   loginUser(formData);
  // }
  // };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        // loginUser,
        //  registerUser,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { isAuthenticated } = context;

  const setIsAuthenticated = (value: boolean) => {
    context.setIsAuthenticated(value);
  };

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
};

export { useAuth, AuthProvider };
