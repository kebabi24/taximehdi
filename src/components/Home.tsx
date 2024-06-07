import { Carousel } from "flowbite-react";
import React, { useState, useEffect } from "react";
import banner from "../assets/banner.svg";
import photo1 from "../assets/hero-002.jpg";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import Button from "@mui/material/Button";
import { Box, ListItemIcon, ListItemText } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SvgIcon from "@mui/material/SvgIcon";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [type, setType] = React.useState("");
  const [isShowMore1, setIsShowMore1] = useState(false);
  const [returnButton, setReturnButton] = useState(false);
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const solutions = [
    {
      id: 1,
      name: "QAD ERP",
      // logo: qad,
      description:
        "la solution ERP QAD est un outil de gestion intégré de toute l’activité de l’entreprise, éditée par QAD USA, ce produit est mis en place en Algérie pour de grande entreprises industrielles dans divers secteurs d’activité, principalement l’agro-alimentaire, mais aussi la transformation de produit plastique, produit de bien-être, et dans l’électronique.  ",
      state: isShowMore1,
      toggle: (key: boolean) => toggleReadMoreLess1(key),
    },
  ];

  const toggleReadMoreLess1 = (state: boolean) => {
    setIsShowMore1(!state);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  const handleReturnButtonClick = () => {
    setReturnButton(!returnButton);
  };
  return (
    <div
      className=" py-8  w-full   bg-[url('assets/hero.jpg')] bg-cover bg-no-repeat overflow-hidden"
      id="solutions"
    >
      <Navbar />
      <div className="md:px-20 py-5 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 ">
        <div
          style={{ borderRadius: "10px" }}
          className="card md:mx-10 text-center md:w-[400px]  md:h-100  shadow cursor-pointer  flex h-full  justify-center items-center overflow-hidden bg-bgGreen"
        >
          <div className=" h-50 md:w-[600px] w-full flex flex-col justify-center items-center bg-yellow">
            <div
              className="w-full mb-5 bg-gradient-to-t from-[#EFCB3C] to-[#F7E498]"
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderStartStartRadius: 10,
                borderStartEndRadius: 10,
                height: "80px",
              }}
            >
              <span
                style={{ fontSize: "32px" }}
                className="font-outfit px-10 font-bold "
              >
                BOOK NOW!
              </span>
            </div>
            <div
              className="p-5"
              style={{
                display: "flex",
                flexDirection: "column",
                // backgroundColor: "red",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Stack spacing={2}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        style={{ marginBottom: "5px", minWidth: "100%" }}
                        required
                        placeholder="Localisation de départ"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                          startAdornment: (
                            <InputAdornment position="start">
                              <LoginIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Stack>
                <Stack spacing={2}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        style={{ marginBottom: "5px", minWidth: "100%" }}
                        placeholder="Localisation d'arrivé"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                          startAdornment: (
                            <InputAdornment position="start">
                              <LoginIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Stack>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    marginBottom: "5px",
                    minWidth: "100%",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDateTimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                      slotProps={{
                        // Targets the `InputAdornment` component.
                        inputAdornment: {
                          position: "start",
                        },
                      }}
                    />
                  </LocalizationProvider>
                </div>
                {returnButton && (
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      marginBottom: "5px",
                      minWidth: "100%",
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDateTimePicker
                        defaultValue={dayjs("2022-04-17T15:30")}
                        slotProps={{
                          // Targets the `InputAdornment` component.
                          inputAdornment: {
                            position: "start",
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                )}
                {!returnButton && (
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        fontWeight: "bold",
                        height: "100%",
                        width: "100%",
                      }}
                      onClick={handleReturnButtonClick}
                    >
                      Ajouter un retour
                    </Button>
                  </div>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <FormControl
                    style={{
                      minWidth: "100%",

                      marginTop: "5px",
                    }}
                  >
                    <Select
                      value={type}
                      onChange={handleChange}
                      style={{ minWidth: "100%" }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      placeholder="Type de véhicule"
                      renderValue={(value) => {
                        console.log(value);
                        return (
                          <Box sx={{ display: "flex" }}>
                            <SvgIcon>
                              <LocalTaxiIcon />
                            </SvgIcon>
                            {value}
                          </Box>
                        );
                      }}
                    >
                      <MenuItem value={"Simple"}>Simple</MenuItem>
                      <MenuItem value={"Confort"}>Confort</MenuItem>
                      <MenuItem value={"Van"}>Van</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    style={{
                      marginBottom: "7px",
                      marginTop: "7px",
                      minWidth: "100%",
                    }}
                    id="input-with-icon-textfield"
                    placeholder="Numéro de téléphone"
                    InputProps={{
                      inputMode: "tel",
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocalPhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </div>
              </div>
              <Button
                className="font-outfit"
                variant="contained"
                style={{
                  backgroundColor: "#313131",
                  color: "white",
                  fontWeight: "bold",
                  height: "55px",
                }}
                onClick={() => navigate("/book")}
              >
                BOOK NOW!
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Aéroport d'Annaba", year: 1994 },
  { title: "Guelma, Guelma", year: 1972 },
  { title: "Aéroport de Constantine", year: 1974 },
  { title: "Skikda, Skikda", year: 2008 },
];
export default Home;
