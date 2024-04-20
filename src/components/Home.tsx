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

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  return (
    <div className="h-[calc(120vh-5rem)] overflow-hidden">
      <div className="bg-cover bg-[url('assets/hero-002.jpg')] flex bg-center bg-no-repeat h-full w-full container flex flex-wrap lg:px-12 px-5 max-w-screen-2xl py-24">
        <div
          className="bg-white  lg:w-1/3 md:w-1/3"
          style={{ borderRadius: 10 }}
        >
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
            <span className="px-10 font-bold">Order Now!</span>
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

        <div className="lg:w-1/2 md:w-1/2">
          {/* <h1 className="lg:text-5xl md:text-4xl  mt-56 mb-4">
            <span className="text-white font-bold">
              LE 1ER SERVICE DE TAXI EN ALGÈRIE
            </span>
          </h1>
          <p className="lg:text-2xl md:text-1xl mb-4">
            <span className="text-white font-bold">
              {" "}
              TAXI MEHDI entreprie pour vous offrir des services de transports a
              moitié du prix et avec une qualité supérieure
            </span>
          </p>
          <div className="flex items-center">
            <button className="rounded px-10 py-3 text-white bg-violet-500 hover:bg-violet-600">
              Naviguer dans notre univers
            </button>
          </div> */}
        </div>

        {/* <div className="container mx-auto flex flex-col my-auto align-middle h-full">
          <motion.div
            className=" my-auto  mx-auto lg:mx-20 w-10/12 lg:w-2/5"
            // variants={fadeIn("down", 0.01)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 1 }}
          >
            <h1 className="lg:text-5xl md:text-4xl  mt-16 mb-4">
              <span className="text-white font-bold">
                LE 1ER SERVICE DE TAXI EN ALGÈRIE
              </span>
            </h1>
            <p className="lg:text-2xl md:text-1xl mb-4">
              <span className="text-white font-bold">
                {" "}
                TAXI MEHDI fondée en 2015, est créditée d’un capital expérience
                au savoir-faire dans le domaine de l'intégration de solutions SI
                reconnus et apprécié par nos partenaires métier.
              </span>
            </p>
            <div className="flex items-center">
              <button className="rounded px-10 py-3 text-white bg-violet-500 hover:bg-violet-600">
                Naviguer dans notre univers
              </button>
            </div>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
