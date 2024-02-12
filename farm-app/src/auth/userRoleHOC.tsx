import React, { ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { UserRoleHOCProps } from "../components/statics/interfaces";
 

const UserRoleHOC: React.FC<UserRoleHOCProps> = ({ children }) => {
    const { user } = useAuth();
    const canUserViewForm = user?.role === "operator" || user?.role === "owner";
 
    return canUserViewForm ? <>{children}</> : null;
};
 
export default UserRoleHOC;