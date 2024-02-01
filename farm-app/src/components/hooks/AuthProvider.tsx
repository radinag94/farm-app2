// import React, {
//   createContext,
//   useEffect,
//   useState,
//   ReactNode,
//   Dispatch,
//   SetStateAction,
// } from "react";

// export interface AuthContextProps {
//   isAuthenticated: boolean;
//   setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
//   loading?: boolean;
// }

// export const AuthContext = createContext<AuthContextProps>({
//   isAuthenticated: false,
//   setIsAuthenticated: () => {},
//   loading: false,
// });

// export interface AuthProviderProps {
//   children: ReactNode;
// }

// const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [authenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   console.log("auth provider", authenticated);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const token = localStorage.getItem("accessToken");
  //     console.log(token);
  //     setIsAuthenticated(!!token);
  //     setLoading(false);
  //   };

  //   checkAuth();
  // }, []);

//   return (
//     <AuthContext.Provider
//     value={{ isAuthenticated: authenticated, setIsAuthenticated, loading }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default AuthProvider;

import { ReactNode, createContext, useContext, useState } from 'react';
import AuthService from '../../auth/authService';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { FormData } from '../Forms/SignUpForm';
import { LoginFormData } from '../Forms/LoginForm';
import { jwtDecode } from 'jwt-decode';
 
interface AuthContextType {
    isAuthenticated: boolean;
    loginUser: (loginFormData:LoginFormData) => Promise<void>;
    registerUser: ( formData:FormData) => Promise<void>;
    // logoutUser: () => void;
}
 
interface AuthProviderProps {
    children: ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
 
const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate();
 
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const authToken = localStorage.getItem('accessToken');
        const isValid = authToken && isTokenValid(authToken);
        return isValid ? true : false;
    });
 
    const authentication = () => {
        const authToken = localStorage.getItem('accessToken');
        const isValid = authToken && isTokenValid(authToken);
        return isValid ? <Outlet /> : <Navigate to={'/login'} />;
    };
    authentication();
 
    function isTokenValid(authToken: string) {
        try {
            const decodedToken = jwtDecode(authToken);
            return decodedToken && !isExpired(decodedToken.exp);
        } catch (error) {
            return false;
        }
    }
 
    function isExpired(exp: number | undefined) {
        const currentTime = Date.now() / 1000;
        return exp < currentTime;
    }
 
    const loginUser = async (loginFormData:LoginFormData) => {
        const auth = await AuthService.signin(loginFormData);
        console.log(auth);
 
        if (auth.access_token) {
            localStorage.setItem('accessToken', JSON.stringify(auth));
            setIsAuthenticated(true);
 
            navigate('/');
        }
    };
 
    const registerUser = async (formData:FormData) => {
        const reg = await AuthService.signup(formData);
        console.log(reg);
        if (reg.isSuccess !== false) {
            loginUser(formData);
        }
    };
 
    // const logoutUser = () => {
    //     const token = localStorage.getItem('accessToken');
    //     if (!token) {
    //         navigate('/');
    //     } else {
    //         logout();
    //         setIsAuthenticated(false);
    //         navigate('/');
    //     }
    // };
 
    return (
        <AuthContext.Provider value={{ isAuthenticated, loginUser, registerUser}}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
 
export { useAuth, AuthProvider };