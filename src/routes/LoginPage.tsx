import Home from "../components/Home";
import lg from "../assets/logo-noir.png";
import LoginIcon from "@mui/icons-material/Login";
import { Button, TextField } from "@mui/material";
import Divider, { dividerClasses } from "@mui/material/Divider";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FormEvent, useState } from "react";
import useToken from "../core/hooks/tokens";
import { useAuth } from "../core/context/AuthContext";
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
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const { loginAuth, loginError } = useAuth();
  const { setToken } = useToken();
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username && password) {
      if (loginAuth) {
        const result = await loginAuth({ username, password });
        console.log(result);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row h-screen">
        <div className="flex w-full h-full sm:w-1/2 bg-white flex-col ">
          <div className="px-36 py-3 w-full h-1/4">
            <img src={lg} alt="" style={{ width: "150px" }} />
          </div>
          <div className="flex flex-col w-full h-full items-center overflow-hidden ">
            <p className="text-xl font-bold">
              {signin
                ? "Connectez-vous a votre compte"
                : "Créer un nouveau compte"}
            </p>
            <p className="mb-5">{signin ? "Connectez avec" : "Créer avec"}</p>
            <div className="flex  p-3">
              <Button
                style={{ marginRight: 12, minWidth: 90, minHeight: 40 }}
                startIcon={<FaFacebookSquare />}
                variant="outlined"
              ></Button>
              <Button
                style={{ marginRight: 12, minWidth: 90, minHeight: 40 }}
                startIcon={<FaInstagramSquare />}
                variant="outlined"
              ></Button>
              <Button
                style={{ marginRight: 12, minWidth: 90, minHeight: 40 }}
                startIcon={<FaTwitter />}
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
            {!signin && (
              <TextField
                id="outlined-basic"
                label="Nom et prénom"
                style={{ width: 300, marginBottom: 15 }}
              />
            )}
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit}
            >
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
                style={{ width: 300, marginBottom: 5 }}
              />
              {errors.password && (
                <p className="text-xs text-grey font-opensans mb-2">
                  {errors.password}
                </p>
              )}
              {!signin && (
                <TextField
                  id="outlined-basic"
                  label="Numéro de téléphone"
                  variant="outlined"
                  style={{ width: 300, marginBottom: 15 }}
                />
              )}
              <Button
                style={{ minWidth: 300, minHeight: 40, marginBottom: 15 }}
                variant="contained"
                type="submit"
              >
                {signin ? "Connectez-vous" : "Créer mon compte"}
              </Button>
            </form>
            <a className="mb-10 text-contained ">
              {signin && " Vous avez oublié votre mot de passe? Click!"}
            </a>

            <a className="mb-5 text-black font-semibold cursor-point">
              {signin
                ? "Vous n'avez pas encore de compte? Inscriez-vous!"
                : "Vous avez déjà un compte? click!"}
            </a>
          </div>
        </div>
        <div className="w-full lg:h-full sm:w-1/2 bg-[url('assets/login.jpg')] bg-cover bg-no-repeat bg-center "></div>
      </div>
    </>
  );
}

export default LoginPage;
