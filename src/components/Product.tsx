import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Divider } from "@mui/material";
import { IoIosSpeedometer } from "react-icons/io";
import { MdCleaningServices } from "react-icons/md";

const Product = () => {
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
      name: "Simple",
      bgcolor: "bg1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      state: isShowMore1,
      toggle: (key: boolean) => toggleReadMoreLess1(key),
    },
    {
      id: 2,
      name: "Standard",
      bgcolor: "bg2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      state: isShowMore2,
      toggle: (key: boolean) => toggleReadMoreLess2(key),
    },
    {
      id: 3,
      name: "Confort",
      bgcolor: "bg3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      state: isShowMore3,
      toggle: (key: boolean) => toggleReadMoreLess3(key),
    },
  ];

  const toggleReadMoreLess1 = (state: boolean) => {
    setIsShowMore1(!state);
  };
  const toggleReadMoreLess2 = (state: boolean) => {
    setIsShowMore2(!state);
  };
  const toggleReadMoreLess3 = (state: boolean) => {
    setIsShowMore3(!state);
  };

  return (
    <div
      className="md:px-14  py-16  md:mr-10 md:ml-10 md:mt-10 md:mb-10 mr-5 ml-5 mt-5 mb-5  bg-bgB overflow-hidden rounded-2xl  "
      id="solutions"
    >
      <div className="text-center ">
        <h1 className="font-outfit text-4xl text-textPrimary font-bold">NOS</h1>
        <h1 className="font-outfit text-4xl text-bgWhite font-bold mb-10 ">
          OFFRES
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
            <div
              className={`text-center p-1 h-8 w-20 bg-bg1 rounded-md mb-8 text-bgWhite font-semibold`}
            >
              <p>Simple</p>
            </div>
            <div
              className={`flex flex-col p-1 h-10 w-56  rounded-md text-2xl  text-black font-bold`}
            >
              <p>≈ 200 DZD</p>
            </div>
            <p className="font-outfit text-xs text-grey mb-8 font-opensans ">
              Pas de crédite carte obligatoire 
            </p>
            <Divider sx={{ minWidth: "100%", marginBottom: 2 }} />
            <div className="flex w-full p-1 mb-2 ">
              <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
              <p>Des chauffeurs ponctuelles & a l'heure</p>
            </div>

            <div className="flex w-full p-1 ">
              <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
              <p>Des chauffeurs ponctuelles & a l'heure</p>
            </div>
             <div className="flex w-full p-1 ">
              <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
              <p>Des chauffeurs ponctuelles & a l'heure</p>
            </div>
          </div>
        </div>
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
          <div
                className={`text-center p-1 h-8 w-20 bg-bg2 rounded-md mb-8 text-bgGreen font-semibold`}
              >
                <p>Standard</p>
              </div>
            <div
              className={`flex flex-col p-1 h-10 w-56  rounded-md text-2xl  text-black font-bold`}
            >
              <p>≈ 200 DZD</p>
            </div>
            <p className="font-outfit text-xs text-grey mb-8 font-opensans ">
              Pas de crédite carte obligatoire
            </p>
            <Divider sx={{ minWidth: "100%", marginBottom: 2 }} />
            <div className="flex w-full p-1 mb-2 ">
              <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
              <p>Des chauffeurs ponctuelles & a l'heure</p>
            </div>

            <div className="flex w-full p-1 ">
              <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
              <p>Des chauffeurs ponctuelles & a l'heure</p>
            </div>
          </div>
        </div>
   
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
          <div
                className={`text-center p-1 h-8 w-20 bg-bg3 rounded-md mb-8 text-bgWhite font-semibold`}
              >
                <p>Confort</p>
              </div>
            <div
              className={`flex flex-col p-1 h-10 w-56  rounded-md text-2xl  text-black font-bold`}
            >
              <p>≈ 200 DZD</p>
            </div>
            <p className="font-outfit text-xs text-grey mb-8 font-opensans ">
              Pas de crédite carte obligatoire
            </p>
            <Divider sx={{ minWidth: "100%", marginBottom: 2 }} />
            <div className="flex w-full p-1 mb-2 ">
              <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
              <p>Des chauffeurs ponctuelles & a l'heure</p>
            </div>

            <div className="flex w-full p-1 ">
              <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
              <p>Des chauffeurs ponctuelles & a l'heure</p>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Product;
