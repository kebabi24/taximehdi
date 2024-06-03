import Home from "../components/Home";
import lg from "../assets/logo-noir.png";
import LoginIcon from "@mui/icons-material/Login";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";
function LoginPage() {
  const [signin, setSignIn] = useState(true);
  const handleScreen = () => {
    setSignIn(!signin);
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
                style={{ marginRight: 12, minWidth: 130, minHeight: 40 }}
                startIcon={<FaFacebookSquare />}
                variant="outlined"
              ></Button>
              <Button
                style={{ marginRight: 12, minWidth: 130, minHeight: 40 }}
                startIcon={<FaInstagramSquare />}
                variant="outlined"
              ></Button>
              <Button
                style={{ marginRight: 12, minWidth: 130, minHeight: 40 }}
                startIcon={<FaTwitter />}
                variant="outlined"
              ></Button>
            </div>
            <Divider style={{ width: "55%", marginBottom: 10 }}>
              Ou utilisez email
            </Divider>
            {!signin && (
              <TextField
                id="outlined-basic"
                label="Nom et prénom"
                style={{ width: 420, marginBottom: 15 }}
              />
            )}
            <TextField
              id="outlined-basic"
              label="Email ou numéro de téléphone"
              variant="outlined"
              style={{ width: 420, marginBottom: 15 }}
            />
            {!signin && (
              <TextField
                id="outlined-basic"
                label="Numéro de téléphone"
                variant="outlined"
                style={{ width: 420, marginBottom: 15 }}
              />
            )}
            <TextField
              id="outlined-password-input"
              label="Mot de passe"
              type="password"
              autoComplete="current-password"
              style={{ width: 420, marginBottom: 15 }}
            />

            <Button
              style={{ minWidth: 420, minHeight: 40, marginBottom: 15 }}
              variant="contained"
              onClick={handleScreen}
            >
              {signin ? "Connectez-vous" : "Créer mon compte"}
            </Button>
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
