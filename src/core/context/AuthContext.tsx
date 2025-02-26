import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Define the type for authentication data
interface AuthData {
  username: string;
  password: string;
  acces_token?: string;
}

interface RegisterUserData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  username: string;
  password: string;
}

// Define the context for authentication
interface AuthContextType {
  user?: AuthData;
  loginAuth?: (data: AuthData) => Promise<void>;
  registerUser?: (data: RegisterUserData) => Promise<void>;
  logoutAuth?: () => Promise<void>;
  loginError?: boolean;
}
interface AuthProviderProps {
  children: ReactNode;
}
const AuthContext = createContext<AuthContextType>({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [screen, setScreen] = useState("auth");
  const [loginError, setLoginError] = useState(false);
  const [user, setUser] = useState<AuthData | undefined>(undefined);

  // useEffect(() => {
  //   navigate("/");
  // }, [user]);
  const loginAuth = async (data: AuthData) => {
    try {
      const res = await axios.post(
        "http://207.180.195.128:3000/api/v1/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(res);
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      if (res.data.user.username === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }

      // navigate("/");
      // localStorage.removeItem("user");
    } catch (e) {
      console.log(e);
      setLoginError(true);
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

  const registerUser = async (data: RegisterUserData) => {
    try {
      const res = await axios.post(
        "http://207.180.195.128:3000/api/v1/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    } catch (e) {
      console.log(e);
      setLoginError(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loginAuth, logoutAuth, loginError, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
