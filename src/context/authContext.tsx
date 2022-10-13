import axios from "axios";
import { createContext, useEffect, useState } from "react";

type ICurrentUser = {
  mail: string;
  id: number;
  img: boolean;
  username: string;
};

type AuthContextType = {
  currentUser: ICurrentUser | null;
  login(inputs: any): Promise<void>;
  logout(inputs: any): Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") as string) || null
  );

  const login = async (inputs: string) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs: string) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
