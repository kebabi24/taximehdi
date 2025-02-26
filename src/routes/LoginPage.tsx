import Home from "../components/Home";
import lg from "../assets/logo-noir.png";
import logo from "../assets/logoo.png";
import LoginIcon from "@mui/icons-material/Login";
import { Button, TextField } from "@mui/material";
import Divider, { dividerClasses } from "@mui/material/Divider";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FormEvent, useState } from "react";
import useToken from "../core/hooks/tokens";
import { useAuth } from "../core/context/AuthContext";
import { sign } from "crypto";
interface ValidationErrors {
  email?: string;
  password?: string;
  global?: string;
  // Add other potential error properties here
}
function LoginPage() {
  const [signin, setSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState(
    signin
      ? { username: "", password: "" }
      : {
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          phone: "",
          email: "",
        }
  );
  const [errors, setErrors] = useState<ValidationErrors>({});
  const { loginAuth, loginError, registerUser } = useAuth();
  const { setToken } = useToken();
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username && password) {
      if (loginAuth) {
        if (signin) {
          const result = await loginAuth({ username, password });
          console.log(result);
        } else {
       
          if(registerUser){
            const { firstName, lastName, username, password, phone, email } = formData;
            const result = await registerUser({ firstName, lastName, username, password, phone, email });
            if(!loginError){
              setSignIn(!signin)
            }
          }
        }
      }
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row h-screen">
        <div className="flex w-full h-full sm:w-1/2 bg-white flex-col ">
          <div className="flex px-16 py-3 w-full h-1/6 justify-content-center align-items-center">
            <img src={logo} alt="" style={{ width: "150px" }} />
          </div>
          <div className="flex flex-col w-full h-full items-center ">
            <p className="text-xl font-bold">
              {signin
                ? "Connectez-vous a votre compte"
                : "Créer un nouveau compte"}
            </p>
            <p className="mb-5">{signin ? "Connectez avec" : "Créer avec"}</p>
            <div className="flex  p-3">
              <Button
                style={{
                  marginRight: 12,
                  minWidth: 90,
                  minHeight: 40,
                  borderColor: "#F09721",
                }}
                startIcon={<FaFacebookSquare color="#F09721" />}
                variant="outlined"
              ></Button>
              <Button
                style={{
                  marginRight: 12,
                  minWidth: 90,
                  minHeight: 40,
                  borderColor: "#F09721",
                }}
                startIcon={<FaInstagramSquare color="#F09721" />}
                variant="outlined"
              ></Button>
              <Button
                style={{
                  marginRight: 12,
                  minWidth: 90,
                  minHeight: 40,
                  borderColor: "#F09721",
                }}
                startIcon={<FaTwitter color="#F09721" />}
                variant="outlined"
              ></Button>
            </div>
            <Divider style={{ width: "55%", marginBottom: 10 }}>
              Ou utilisez email
            </Divider>
            {loginError && (
              <div className="alert">
                <span>Veuillez vérifier vos informations</span>
              </div>
            )}

            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit}
            >
              {!signin && (
                <>
                  <TextField
                    id="outlined-basic"
                    label="Nom"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{ width: 300, marginBottom: 15 }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Prénom"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={{ width: 300, marginBottom: 15 }}
                  />
                </>
              )}
              <TextField
                type="text"
                id="outlined-basic"
                label="Username"
                name="username"
                variant="outlined"
                value={formData.username}
                onChange={handleChange}
                style={{ width: 300, marginBottom: 15 }}
              />

              <TextField
                id="outlined-password-input"
                label="Mot de passe"
                type="password"
                name="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                style={{ width: 300, marginBottom: 15 }}
              />
              {errors.password && (
                <p className="text-xs text-grey font-opensans mb-2">
                  {errors.password}
                </p>
              )}
              {!signin && (
                <>
                  <TextField
                    id="outlined-basic"
                    label="Numéro de téléphone"
               
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ width: 300, marginBottom: 15 }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                  
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: 300, marginBottom: 15 }}
                  />
                </>
              )}
              <Button
                style={{
                  minWidth: 300,
                  minHeight: 40,
                  marginBottom: 15,
                  backgroundColor: "#F09721",
                }}
                variant="contained"
                type="submit"
              >
                {signin ? "Connectez-vous" : "Créer mon compte"}
              </Button>
            </form>
            <a className="mb-10 text-contained" style={{ color: "black" }}>
              {signin && " Vous avez oublié votre mot de passe? Click!"}
            </a>

            <a className="mb-5 text-black font-semibold cursor-point">
              {signin ? (
                <Button
                  style={{
                    minWidth: 300,
                    minHeight: 40,
                    marginBottom: 15,
                    borderColor: "#F09721",
                    color: "#F09721",
                  }}
                  variant="outlined"
                  onClick={() => setSignIn(!signin)}
                >
                  Créer mon nouveau compte
                </Button>
              ) : (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setSignIn(!signin)}
                >
                  Vous avez déjà un compte? Click!
                </span>
              )}
            </a>
          </div>
        </div>
        <div className="w-full lg:h-full sm:w-1/2 bg-[url('assets/login.jpg')] bg-cover bg-no-repeat bg-center "></div>
      </div>
    </>
  );
}

export default LoginPage;
