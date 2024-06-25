import { useContext, createContext, useState, ReactNode } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Define the type for authentication data
interface AuthData {
  username: string;
  password: string;
}

// Define the context for authentication
interface AuthContextType {
  screen?: string;
  loginAuth?: (data: AuthData) => Promise<void>;
  logoutAuth?: () => Promise<void>;
}
interface AuthProviderProps {
  children: ReactNode;
}
const AuthContext = createContext<AuthContextType>({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [screen, setScreen] = useState("auth");

  const loginAuth = async (data: AuthData) => {
    try {
        console.log(data)
      const res = await axios.post("http://localhost:3000/api/v1/auth/login", {
        auth: data,
      });
    //   if (res.data.screen !== undefined) {
    //     readCookie();
    //     return;
    //   }
    } catch (e) {
      console.log(e);
    }
  };

  const readCookie = async () => {
    try {
      const res = await axios.get("/api/read-cookie");
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        navigate("/view");
        return;
      }
    } catch (e) {
      setScreen("auth");
      console.log(e);
    }
  };

  const logoutAuth = async () => {
    try {
      await axios.get("/api/clear-cookie");
      setScreen("auth");
      navigate("/login");
      return;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ screen, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
