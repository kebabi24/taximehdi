import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import {
  Button,
  Divider,
  FormControlLabel,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  Switch,
  SwitchProps,
  stepConnectorClasses,
  styled,
} from "@mui/material";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IoMdTime } from "react-icons/io";
import { IoCarSportSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Check from "@mui/icons-material/Check";
import Trip from "../core/models/trip.model";
import { motion } from "framer-motion";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface stateProps {
  state: any;
}
const BookInfo = (props: stateProps) => {
  const [step, setStep] = useState(0);

  const [endStep, setEndStep] = useState(-1);
  const [tripsAdded, setTripsAdded] = useState(false);
  const [value, setValue] = React.useState<number | null>(null);
  let navigate = useNavigate();
  const objUser = localStorage.getItem("user");
  const userLoggedIn = objUser ? JSON.parse(objUser) : null;
  console.log(props.state);
  const [tripData, setTripData] = useState<Trip>({
    userName: "",

    email: "",

    phone: "",

    departure: props.state.depart,

    destination: props.state.destination,

    departureTime: props.state.departureTime,

    returnTime: props.state.returnTime,

    return: false,

    passengerNumber: 1,

    onBoard: false,

    suppServices: false,

    promo: false,

    promoCode: "",

    type: props.state.type,

    withNote: false,

    tripNote: "",

    userId: "",

    tripPrice: 0,
  });

  const handleChange = (e: any) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };
  const handleChangeChecked = (e: any) => {
    setTripData({ ...tripData, [e.target.name]: e.target.checked });
  };
  useEffect(() => {
    const trip = localStorage.getItem("tripsAdded");
    if (trip) {
      localStorage.removeItem("tripsAdded");
      navigate("/");
    }
  }, [tripsAdded]);
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#F09721",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  const handleSubmit = () => {
    setStep(step + 1);
    setTripData({ ...tripData, userId: userLoggedIn.id });
    console.log(tripData);
  };
  const handleNumberChange = () => {
    setTripData({ ...tripData, passengerNumber: tripData.passengerNumber + 1 });
    console.log(tripData);
  };

  const confirmOrder = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/trips/newTrip",
        tripData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setEndStep(99);
      console.log(tripData);
      localStorage.setItem("tripsAdded", JSON.stringify(res.data.id));
    } catch (e) {
      console.log(e);
    }
  };
  const NumberInput = React.forwardRef(function CustomNumberInput(
    props: NumberInputProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInput,
          incrementButton: StyledButton,
          decrementButton: StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: <AddIcon fontSize="small" />,
            className: "increment",
          },
          decrementButton: {
            children: <RemoveIcon fontSize="small" />,
            className: "decrement",
          },
        }}
        {...props}
        ref={ref}
      />
    );
  });
  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#F09721",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#F09721",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));
  const steps = ["1. Informations", "2. Confirmation"];
  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
      color:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
      display: "flex",
      height: 22,
      alignItems: "center",
      ...(ownerState.active && {
        color: "#F09721",
      }),
      "& .QontoStepIcon-completedIcon": {
        color: "#F09721",
        zIndex: 1,
        fontSize: 18,
      },
      "& .QontoStepIcon-circle": {
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "currentColor",
      },
    })
  );
  return (
    <div className="md:px-24 py-4 md:py-4   " id="solutions ">
      {endStep == -1 && (
        <div className="flex flex-wrap gap-4 justify-center  md:w-[100%]">
          <>
            <div className="card  py-4 text-center md:col-span-2 md:h-100   flex h-full  md:w-[40%] w-[100%] ">
              <div className="mb-4 h-50  flex flex-col w-full   ">
                <div className="flex w-full h-full mb-2 self-start">
                  <Stepper
                    alternativeLabel
                    activeStep={step}
                    connector={<QontoConnector />}
                    style={{ width: "100%", left: 0, right: 0 }}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>
                          {label}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </div>
                {step === 0 && (
                  <>
                    <div className="flex flex-col bg-white pt-4 pb-4 rounded-xl shadow-lg mb-5 align-start">
                      <h4 className="font-opensans font-extrabold text-gray800  font-size-32 mb-5 text-md ml-3 self-start">
                        Détails de transfere
                      </h4>
                      <div className="flex flex-row items-center  ml-3 mb-4">
                        <IoMdTime color={"#717171"} size={20} />
                        <h2 className="font-opensans  text-grey  text-sm ml-1 ">
                          Délais du trajet : 30min
                        </h2>
                      </div>
                      <div
                        className=" ml-3 mb-8"
                        style={{
                          display: "flex",
                          width: "100%",

                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label className="text-grey text-xs font-opensans mb-2 font-semibold">
                          Destination : addresse ou le nom d'hotel *
                        </label>
                        <input
                          style={{
                            borderWidth: 2,
                            width: "94%",
                            padding: 10,
                            borderRadius: 6,
                          }}
                          placeholder="Aéroport d'annaba"
                          value={tripData.destination}
                          onChange={handleChange}
                          name="destination"
                        />
                      </div>
                      <Divider sx={{ minWidth: "100%", marginBottom: 2 }} />
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "72%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Ajouter un retour
                          </p>
                          <p className="text-xs text-grey font-opensans ">
                            100 DZD
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <IOSSwitch
                                onChange={handleChangeChecked}
                                checked={tripData.return}
                                name="return"
                                sx={{ m: 1 }}
                              />
                            }
                            label=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  bg-white pt-4 pb-4 rounded-xl shadow-lg mb-5 align-start">
                      <h4 className="font-opensans font-extrabold text-gray800  mb-4 text-md ml-3 self-start">
                        Passengers
                      </h4>
                      <div className="flex w-full mb-5">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "60%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Nombre de passager
                          </p>
                          <p className="text-xs text-grey font-opensans  ">
                            Inclus les enfants
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "40%",

                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <NumberInput
                            aria-label="Quantity Input"
                            value={tripData.passengerNumber}
                            onChange={(event, val) =>
                              setTripData({
                                ...tripData,
                                passengerNumber: val ? val : 1,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "72%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Ajouter un bébé à bord
                          </p>
                          <p className="text-xs text-grey font-opensans ">
                            Ceci est obligatoire
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <IOSSwitch
                                name="onBoard"
                                onChange={handleChangeChecked}
                                checked={tripData.onBoard}
                                sx={{ m: 1 }}
                              />
                            }
                            label=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  bg-white pt-4 pb-4 rounded-xl shadow-lg mb-5 align-start">
                      <h4 className="font-opensans font-extrabold text-gray800   font-size-32 mb-5 text-md ml-3 self-start">
                        Informations du passager
                      </h4>
                      <div className="flex w-full mb-5 flex-col">
                        <div
                          className="ml-3 mb-4"
                          style={{
                            display: "flex",
                            width: "100%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <label className="text-xs text-grey font-opensans mb-2 font-semibold">
                            Nom et prénoms *
                          </label>
                          <input
                            style={{
                              borderWidth: 2,
                              width: "93%",
                              padding: 10,
                              borderRadius: 6,
                            }}
                            value={tripData.userName}
                            onChange={handleChange}
                            placeholder="Taxi Mehdi"
                            name="userName"
                          />
                        </div>
                        <div
                          className="ml-3 mb-4"
                          style={{
                            display: "flex",
                            width: "100%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <label className="text-xs text-grey font-opensans mb-2 font-semibold">
                            Email *
                          </label>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",

                              alignItems: "flex-start",
                            }}
                          >
                            <input
                              style={{
                                borderWidth: 2,
                                minWidth: "43%",
                                padding: 10,
                                borderRadius: 6,
                              }}
                              value={tripData.email}
                              onChange={handleChange}
                              placeholder="kebabiabdel@gmail.com"
                              name="email"
                            />
                            <p className="text-xs text-grey font-opensans  md:ml-3">
                              Pour vous envoyer votre confirmation de
                              réservation.
                            </p>
                          </div>
                        </div>
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "100%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <label className="text-xs text-grey font-opensans mb-2 font-semibold">
                            Numéro de téléphone *
                          </label>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",

                              alignItems: "flex-start",
                            }}
                          >
                            <input
                              style={{
                                borderWidth: 2,
                                minWidth: "43%",
                                padding: 10,
                                borderRadius: 6,
                              }}
                              value={tripData.phone}
                              onChange={handleChange}
                              name="phone"
                              placeholder="0773066634"
                            />
                            <p className="text-xs text-grey font-opensans  ml-3">
                              Pour vous contacter en cas d'urgence.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  bg-white pt-4 pb-4  rounded-xl shadow-lg mb-5 align-start">
                      <h4 className="font-opensans font-extrabold text-gray800   font-size-32 mb-5 text-md ml-3 self-start">
                        Services additionelle
                      </h4>
                      <div className="flex w-full mb-5">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "72%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Boire de l'eau
                          </p>
                          <p className="text-xs text-grey font-opensans  ">
                            Bouteille d'eau 50 DZD
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <IOSSwitch
                                sx={{ m: 1 }}
                                checked={tripData.suppServices}
                                onChange={handleChangeChecked}
                                name="suppServices"
                              />
                            }
                            label=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  bg-white pt-4 pb-4 rounded-xl shadow-lg mb-5 align-start">
                      <h4 className="font-opensans font-extrabold text-gray800   font-size-32 mb-5 text-md ml-3 self-start">
                        Notes
                      </h4>
                      <div className="flex w-full mb-5">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "72%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Ajouter une note
                          </p>
                          <p className="text-xs text-grey font-opensans  ">
                            Pour fournir le véhicule qui vous convient
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <IOSSwitch
                                sx={{ m: 1 }}
                                name="withNote"
                                checked={tripData.withNote}
                                onChange={handleChangeChecked}
                              />
                            }
                            label=""
                          />
                        </div>
                      </div>
                      {tripData.withNote && (
                        <div className="flex w-full mb-5">
                          <div
                            className="ml-3 "
                            style={{
                              display: "flex",
                              width: "88%",

                              flexDirection: "column",
                              alignItems: "flex-start",
                            }}
                          >
                            <textarea
                              name="tripNote"
                              rows={4}
                              style={{
                                borderWidth: 2,
                                minWidth: "98%",
                                padding: 10,
                                borderRadius: 6,
                              }}
                              onChange={handleChange}
                              value={tripData.tripNote}
                              placeholder="vous pouvez ajouter une note au chauffeur"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col  bg-white pt-4 pb-4  rounded-xl shadow-lg mb-5 align-start">
                      <h4 className="font-opensans font-extrabold text-gray800   font-size-32 mb-5 text-md ml-3 self-start">
                        Code promo
                      </h4>
                      <div className="flex ml-3 mb-4">
                        <input
                          style={{
                            borderWidth: 2,
                            width: "50%",
                            padding: 10,
                            borderRadius: 6,
                            marginRight: 20,
                          }}
                          name="myInput"
                        />
                        <Button
                          className="font-opensans"
                          variant="contained"
                          disabled
                          style={{
                            backgroundColor: "#313131",
                            color: "white",
                            fontWeight: "bold",
                            height: "45px",
                          }}
                        >
                          Appliquer
                        </Button>
                      </div>
                    </div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <div className="flex  bg-white pt-4 pb-4  rounded-xl shadow-lg mb-5 ">
                      <div className="w-[80%]  flex justify-start items-start">
                        <h4 className="font-opensans font-extrabold text-gray800  font-size-32  text-md ml-3 ">
                          Détails de transfere
                        </h4>
                      </div>
                      <div className="w-[20%]">
                        <a
                          onClick={() => setStep(step - 1)}
                          className="font-opensans  text-gray800 font-semibold cursor-pointer   text-sm ml-3 self-start"
                        >
                          Modifier
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col  bg-white pt-4 pb-4  rounded-xl shadow-lg mb-5 align-start">
                      <h4 className="font-opensans font-extrabold text-gray800  mb-4 text-md ml-3 self-start">
                        Récapitulatif de votre course
                      </h4>
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "75%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Informations Client
                          </p>
                          <p className="text-xs text-grey font-opensans mb-2">
                            Nom et prénoms : {tripData.userName}
                          </p>
                          <p className="text-xs text-grey font-opensans mb-2">
                            Email : {tripData.email}
                          </p>
                          <p className="text-xs text-grey font-opensans mb-2">
                            Numéro de téléphone : {tripData.phone}
                          </p>
                        </div>
                        {/* <div
                      style={{
                        display: "flex",
                        width: "25%",

                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} />}
                        label=""
                      />
                    </div> */}
                      </div>
                      <div className="flex w-full mb-5">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "60%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Destination
                          </p>
                          <p className="text-xs text-grey font-opensans  ">
                            {tripData.destination}
                          </p>
                        </div>
                      </div>
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "70%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Ajout d'un retour
                          </p>
                          {/* <p className="text-xs text-grey font-opensans ">
                        Ceci est obligatoire
                      </p> */}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {tripData.return ? (
                            <FaCheck color="#F09721" size={24} />
                          ) : (
                            <IoClose color="red" size={24} />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "70%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Nombre de passager
                          </p>
                          {/* <p className="text-xs text-grey font-opensans ">
                        Ceci est obligatoire
                      </p> */}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span>1 personne</span>
                        </div>
                      </div>
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "70%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Bébé a bord
                          </p>
                          {/* <p className="text-xs text-grey font-opensans ">
                        Ceci est obligatoire
                      </p> */}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {tripData.onBoard ? (
                            <FaCheck color="#F09721" size={24} />
                          ) : (
                            <IoClose color="red" size={24} />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "70%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Service supplémentaire
                          </p>
                          <p className="text-xs text-grey font-opensans ">
                            Bouteille d'eau
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {tripData.suppServices ? (
                            <FaCheck color="#F09721" size={24} />
                          ) : (
                            <IoClose color="red" size={24} />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "70%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Note à retenir
                          </p>
                          <p className="text-xs text-grey font-opensans ">
                            {tripData.tripNote}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {tripData.withNote ? (
                            <FaCheck color="#F09721" size={24} />
                          ) : (
                            <IoClose color="red" size={24} />
                          )}
                        </div>
                      </div>
                      <div className="flex w-full mb-2">
                        <div
                          className="ml-3 "
                          style={{
                            display: "flex",
                            width: "70%",

                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <p className="font-opensans font-semibold text-gray800 ">
                            Promo
                          </p>
                          {/* <p className="text-xs text-grey font-opensans ">
                        Ceci est obligatoire
                      </p> */}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "25%",

                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {tripData.promo ? (
                            <FaCheck color="#F09721" size={24} />
                          ) : (
                            <IoClose color="red" size={24} />
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="flex  bg-white pt-4 pb-4  rounded-xl shadow-lg mb-5 ">
                      <div className="w-[80%]  flex justify-start items-start">
                        <h4 className="font-opensans font-extrabold text-gray800  font-size-32  text-md ml-3 ">
                          Confirmation de votre course
                        </h4>
                      </div>
                      <div className="w-[20%]">
                        <a
                          onClick={() => setStep(step - 1)}
                          className="font-opensans  text-gray800 font-semibold cursor-pointer   text-sm ml-3 self-start"
                        >
                          Modifier
                        </a>
                      </div>
                    </div>
                  </>
                )}
                <div className="flex flex-col  bg-white   rounded-xl shadow-lg mb-5 align-start">
                  {step !== 1 && (
                    <Button
                      onClick={handleSubmit}
                      className="font-opensans"
                      variant="contained"
                      style={{
                        backgroundColor: "#313131",
                        color: "white",
                        fontWeight: "bold",
                        height: "50px",
                      }}
                    >
                      Continuer
                    </Button>
                  )}
                  {step === 1 && (
                    <Button
                      onClick={confirmOrder}
                      className="font-opensans"
                      variant="contained"
                      style={{
                        backgroundColor: "#313131",
                        color: "white",
                        fontWeight: "bold",
                        height: "50px",
                      }}
                    >
                      Confirmer
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </>
          <>
            <div className="card flex flex-col ">
              <div className=" h-46 md:mt-20  flex flex-col bg-white rounded-xl shadow-lg">
                {/* <img src={solution.logo} alt="" /> */}
                <div className="flex p-3  bg-gradient-to-t from-[#EFCB3C] to-[#F7E498] rounded-tl-xl rounded-tr-xl shadow-lg">
                  <div className="flex p-1 items-center justify-center bg-white mr-2 h-8 w-8 rounded-3xl self-center">
                    <IoCarSportSharp color={"#717171"} size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs ">{props.state.type}</span>
                    <span className="text-xs">
                      up to 4 passengers, 3 pieces of baggage
                    </span>
                  </div>
                </div>

                <div className="flex  md:w-12/13 p-4">
                  <div className="flex bg-neutralDGrey flex-row rounded-md p-1 w-full h-[100%]">
                    <div className="flex flex-col justy-center items-center p-1 w-[30px] h-[60px]">
                      <div className="bg-bg4 w-[10px] h-[10px] rounded-xl"></div>
                      <div className="bg-bg4 w-[1px] h-[35px] rounded-xl"></div>
                      <div className="bg-bg4 w-[10px] h-[10px] rounded-xl"></div>
                    </div>
                    <div className="flex flex-col    w-[100%] h-[60px]">
                      <div
                        style={{ marginTop: -4 }}
                        className=" w-full h-[17px] rounded-xl"
                      >
                        <span className="font-opensans text-xs font-bold text-gray800 ">
                          {" "}
                          {props.state.depart}
                        </span>
                      </div>
                      <div className=" w-full h-[24px] rounded-xl"></div>
                      <div className=" w-full h-[17px] rounded-xl">
                        <span className="font-opensans text-xs font-bold text-gray800">
                          {props.state.destination}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-4 pr-4 h-16 mt-4  flex items-center place-content-between bg-white rounded-xl shadow-lg">
                <p className="font-opensans text-md font-extrabold text-gray800">
                  TOTAL:
                </p>
                <p className="font-opensans text-md font-extrabold text-textPrimary ">
                  {props.state.tripPrice} DA
                </p>
              </div>
            </div>
          </>
        </div>
      )}
      {endStep !== -1 && (
        <div className="flex flex-col py-36 flex-wrap  items-center  md:w-[100%] ">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <FaCheck color="#F09721" size={78} />
          </motion.div>
          <p className="ml-5 mr-5 font-opensans  text-gray800 font-semibold  self-center ">
            Nous vous remercions d'avoir choisi TAXI MEHDI pour votre voyage
          </p>

          <p className="p-3 ml-5 mr-5  font-opensans  text-gray800  self-center ">
            un reçu de confirmation de votre commande sera envoyé à{" "}
            {tripData.email}
          </p>

          <p className="font-opensans  text-gray800 ">A trés bientot.</p>
        </div>
      )}
    </div>
  );
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `
);

const StyledInput = styled("input")(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
    };
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
    &:hover {
      border-color: #F09721};
    }
  
    &:focus {
      border-color: #F09721};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? "#F09721" : "#F09721"
      };
    }
  
    &:focus-visible {
      outline: 0;
    }
  `
);

const StyledButton = styled("button")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === "dark" ? "#F09721" : "#F09721"};
      border-color: ${theme.palette.mode === "dark" ? "#F09721" : "#F09721"};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `
);
export default BookInfo;
