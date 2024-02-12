import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import {
  AuthContextType,
  AuthProviderProps,
  DecodedToken,
} from "../components/statics/interfaces";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<{ role: string; email: string } | null>(
    null
  );

  const navigate = useNavigate();
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
    const authToken = localStorage.getItem("accessToken");
    if (authToken) {
      const decoded: DecodedToken = jwtDecode(authToken);
      if (decoded.exp * 1000 > Date.now()) {
        setIsAuthenticated(true);
        setUser({ role: decoded.role, email: decoded.email });
      } else {
        localStorage.removeItem("accessToken");
        setIsAuthenticated(false);
        setUser(null);
        navigate("/");
      }
    }
  }, [navigate]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export { AuthProvider };
