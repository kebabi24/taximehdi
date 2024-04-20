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
const Home = () => {
  const [type, setType] = React.useState("");
  const [isShowMore1, setIsShowMore1] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);
  const [isShowMore3, setIsShowMore3] = useState(false);
  const [isShowMore4, setIsShowMore4] = useState(false);
  const [isShowMore5, setIsShowMore5] = useState(false);
  const [isShowMore6, setIsShowMore6] = useState(false);
  const [isShowMore7, setIsShowMore7] = useState(false);
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
  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-[url('assets/hero-002.jpg')] overflow-hidden"
      id="solutions"
    >
      <div className="text-center my-2"></div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        <div
          style={{ borderRadius: "10px" }}
          className="card  text-center  mx-auto md:h-100 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex h-full bg-bgWhite justify-center items-center"
        >
          <div className=" h-50 md:w-[400px] mx-auto flex flex-col justify-center items-center ">
            <div
              className="w-full bg-textPrimary mb-5"
              style={{
                display: "flex",
                alignItems: "center",

                borderStartStartRadius: 10,
                borderStartEndRadius: 10,
                height: "100px",
              }}
            >
              <span
                style={{ marginLeft: "28px", fontSize: "24px" }}
                className="px-10 font-bold "
              >
                BOOK NOW!
              </span>
            </div>
            <div
              className="p-5"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                style={{ marginBottom: "7px" }}
                id="input-with-icon-textfield"
                placeholder="Localisation de départ"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LoginIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <TextField
                id="input-with-icon-textfield"
                placeholder="Localisation d'arrivé"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LogoutIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["MobileDateTimePicker"]}>
                  <DemoItem>
                    <DesktopDateTimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                      slotProps={{
                        // Targets the `InputAdornment` component.
                        inputAdornment: {
                          position: "start",
                        },
                      }}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
              <FormControl style={{ marginBottom: "7px", marginTop: "7px" }}>
                <Select
                  value={type}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  renderValue={(value) => {
                    console.log(value);
                    return (
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <SvgIcon>
                          <LocalTaxiIcon />
                        </SvgIcon>
                        {value}
                      </Box>
                    );
                  }}
                >
                  <MenuItem value=""></MenuItem>

                  <MenuItem value={"Simple"}>Simple</MenuItem>
                  <MenuItem value={"Confort"}>Confort</MenuItem>
                  <MenuItem value={"Van"}>Van</MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ marginBottom: "40px" }}
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
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "#F09721",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Réserver maintenant!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
