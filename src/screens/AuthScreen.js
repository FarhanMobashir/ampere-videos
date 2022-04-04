import React from "react";
import { ActiveUser } from "../components/ActiveUser";
import { AuthForm } from "../components/AuthForm";
import { AuthContext } from "../contexts/AuthContext";

export const AuthScreen = () => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated() ? <ActiveUser /> : <AuthForm />;
};
