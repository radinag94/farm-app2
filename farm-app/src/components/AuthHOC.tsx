import React from "react";
import { Outlet } from "react-router-dom";
import { BaseLayout } from "./BaseLayout/BaseLayout";

export const AuthHOC = ({ children }: { children: React.ReactNode }) => {

  return (
    <BaseLayout>
      {/* <h2>Hello user!</h2> */}
      {children}
      {/* Outlet is needed in case of defining routes as plain objects */}
      <Outlet />
    </BaseLayout>
  );
};

export default AuthHOC;
