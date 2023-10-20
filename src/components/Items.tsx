import React, { useState, useEffect } from "react";
import ph11 from "../assets/11.svg";
import ph12 from "../assets/22.svg";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const Items = () => {
  return (
    <>
      <div className="">
        <div className="flex h-[calc(100vh-5rem)] bg-blackBlack">
          <div className="bg-[url('src/assets/22.svg')]  bg-no-repeat h-full">
            <div className="flex justify-center items-center">
              <p>Text here</p>
            </div>
          </div>
        </div>
        <div className="h-screen bg-blackBlack">
          <div className="bg-[url('src/assets/11.svg')] bg-no-repeat h-full"></div>
        </div>
      </div>
      {/* <div className="bg-blackBlack" id="vision">
        <div className="flex flex-col bg-blackBlack">
          <div className="flex justify-end items-end">
            <img src={ph12} alt="" />
          </div>

          <div>
            <img src={ph11} alt="" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Items;
