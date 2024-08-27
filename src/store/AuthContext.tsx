import { save, removeValueFor } from "@/utils/SecureStore";
import { createContext, FC, ReactNode, useState } from "react";

export type AuthContextType = {
  token: string;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: "",
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | undefined>();

  const authenticate: AuthContextType["authenticate"] = (token: string) => {
    setAuthToken(token);
    save("token", String(token));
  };

  const logout = () => {
    setAuthToken(undefined);
    removeValueFor("token");
  };

  const value: AuthContextType = {
    token: authToken!,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
