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
import dayjs, { Dayjs } from "dayjs";
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
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TestNavbar from "./TestNavbar";
import NavbarCustomized from "./NavbarCustomized";
TestNavbar;
const Home = () => {
  const [type, setType] = React.useState("");
  const [error, setError] = useState(false);
  const [depart, setDepart] = useState("");
  const [departError, setDepartError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);
  const [selectDate, setSelectDate] = useState(true);
  const [selectedDepartDate, setSelectedDepartDate] = useState(
    dayjs(new Date())
  );
  const [selectedReturnDate, setSelectedReturnDate] = useState(
    dayjs(new Date())
  );
  const [departTime, setDepartTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [destination, setDestination] = useState("");
  const [returnButton, setReturnButton] = useState(false);
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleDepartChange = (e: any) => {
    console.log(e.target.value);
    setDepart(e.target.value);
    setDepartError(false);
  };
  const handleDestinationChange = (e: any) => {
    console.log(e.target.value);
    setDestination(e.target.value);
    setDestinationError(false);
  };

  const handleDepartDateChange = (date: any) => {
    setSelectDate(false);
    setError(false);
    setSelectedDepartDate(date);
    setDepartTime(date.format("YYYY-MM-DD HH:mm:ssZ"));
  };

  const handleReturnDateChange = (date: any) => {
    // setSelectDate(true)
    setSelectedReturnDate(date);
    setReturnTime(date.format("YYYY-MM-DD HH:mm:ssZ"));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  const handleReturnButtonClick = () => {
    setReturnButton(!returnButton);
  };
  const handleBooking = () => {
    if (selectDate) {
      setError(true);
    } else {
      if (depart == "") {
        setDepartError(true);
      } else if (destination == "") {
        setDestinationError(true);
      } else {
        navigate("/book", {
          state: {
            depart: depart,
            destination: destination,
            departureTime: departTime,
            returnTime: returnButton ? returnTime : null,
            type: type,
          },
        });
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <NavbarCustomized></NavbarCustomized>
      <div className=" flex flex-col sm:flex-row h-screen" id="solutions">
        <div className="flex w-full h-full sm:w-9/12 bg-white flex-col justify-center ">
          <div
            style={{ borderRadius: "10px" }}
            className="card md:mx-10 mx-4 text-center md:w-[400px]  md:h-100  drop-shadow-2xl  flex justify-center items-center overflow-hidden bg-white "
          >
            <div className=" h-50 md:w-[600px] w-full flex flex-col justify-center items-center ">
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
              <form>
                <div
                  className="pb-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "red",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {departError && (
                      <span className="self-start text-xs text-red font-opensans">
                        Ce champ est obligatoire *
                      </span>
                    )}
                    <Stack spacing={2}>
                      <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={options.map((option) => option.title)}
                        onChange={(event, value) => setDepart(value)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            style={{ marginBottom: "5px", minWidth: "100%" }}
                            required
                            placeholder="Localisation de départ"
                            value={depart}
                            onChange={handleDepartChange}
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
                    {destinationError && (
                      <span className="self-start text-xs text-red font-opensans">
                        Ce champ est obligatoire *
                      </span>
                    )}
                    <Stack spacing={2}>
                      <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        onChange={(event, value) => setDestination(value)}
                        options={options.map((option) => option.title)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            style={{ marginBottom: "5px", minWidth: "100%" }}
                            placeholder="Localisation d'arrivé"
                            value={destination}
                            onChange={handleDestinationChange}
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
                    {error && (
                      <span className="self-start text-xs text-red font-opensans">
                        veuillez séléctionné une date
                      </span>
                    )}
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
                          defaultValue={dayjs(new Date())}
                          slotProps={{
                            // Targets the `InputAdornment` component.
                            inputAdornment: {
                              position: "start",
                            },
                            textField: {
                              required: true,
                            },
                          }}
                          value={selectedDepartDate}
                          onChange={handleDepartDateChange}
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
                            defaultValue={dayjs(new Date())}
                            slotProps={{
                              // Targets the `InputAdornment` component.
                              inputAdornment: {
                                position: "start",
                              },
                            }}
                            value={selectedReturnDate}
                            onChange={handleReturnDateChange}
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
                    onClick={handleBooking}
                  >
                    BOOK NOW!
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="z-99 w-full lg:h-full sm:w-1/2 bg-[url('assets/home.jpg')] bg-[length:100%_100%] bg-no-repeat bg-center "></div>
      </div>
    </div>
  );
};
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const options = [
  { title: "Aéroport d'Annaba", year: 1994 },
  { title: "Guelma, Guelma", year: 1972 },
  { title: "Aéroport de Constantine", year: 1974 },
  { title: "Skikda, Skikda", year: 2008 },
];
export default Home;
