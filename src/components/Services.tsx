import React, { useState, useEffect } from "react";
import { BsFillDisplayFill } from "react-icons/bs";
import photo1 from "../assets/1.jpg";
import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import RedeemIcon from "@mui/icons-material/Redeem";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const Services = () => {
  const solutions = [
    {
      id: 1,
      name: "RAMASSAGE A DOMICILE",
      icon: <HomeIcon />,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      name: "RESERVATION RAPIDE",
      icon: <FlashOnIcon />,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      name: "DES BONUS A GAGNER",
      icon: <RedeemIcon />,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      name: "LOCALISATION GPS",
      icon: <GpsFixedIcon />,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = (key: number) => {
    console.log(key);
    setIsShowMore(!isShowMore);
  };
  return (
    <div
      className="md:px-4 px-4 py-16 max-w-screen-2xl  mx-auto bg-[url('assets/bg-road.jpg')]"
      id="services"
    >
      <div className="text-center ">
        <h1 className="text-4xl text-textPrimary font-bold">ON VOUS OFRONS </h1>
        <h1 className="text-4xl text-white font-bold mb-10 ">
          TOUT CE QUE VOUS DESIRE
        </h1>
      </div>
      <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {solutions.map((solution) => (
          <>
            <div
              key={solution.id}
              className="card px-4 py-8 text-center md:w-[400px] mx-auto md:h-100  shadow cursor-pointer  flex h-full bg-transparent justify-center items-center "
            >
              <div className="mb-4 h-50  mx-auto flex flex-row justify-center items-center">
                {/* <img src={solution.logo} alt="" /> */}
                <div
                  className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                    backgroundColor: "#F09721",
                    height: "60px",
                    width: "110px",
                    marginRight: "15px",
                  }}
                >
                  {solution.icon}
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-xl text-textPrimary mb-5">
                    {solution.name}
                  </div>
                  <div className="text-white font-semibold">
                    {solution.description}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
