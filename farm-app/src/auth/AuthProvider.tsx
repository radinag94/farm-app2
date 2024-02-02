import { ReactNode, createContext, useContext, useState,useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";

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

  const publicRoutes = ['/'];
  const navigate = useNavigate()
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
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");
      const isValidToken = token && isTokenValid(token);
 
      if (!isValidToken&&!publicRoutes.includes(window.location.pathname)) {
        setIsAuthenticated(false);
        navigate("/");
      } else {
        if (!publicRoutes.includes(window.location.pathname)) {
            setIsAuthenticated(true);
          }
      }
    };
 
    checkAuth();
  }, [navigate]);
 

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
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
