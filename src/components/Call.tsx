import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import qad from "../assets/qad1.png";
import axiom from "../assets/newlogoo.png";

const Call = () => {
  return (
    <div
      className="md:px-14 px-4 p-12 w-full bg-textPrimary overflow-hidden"
      id="solutions"
    >
      <div className="text-center  ">
        <h1 className="font-outfit text-4xl text-black font-bold mb-5">
          ON VOUS ATTENDS 7j/7 ET 24/24h
        </h1>
        <h1 className="font-outfit text-4xl text-black font-bold ">
          {" "}
          + (213) 6 71 42 14 48
        </h1>
      </div>
    </div>
  );
};

export default Call;
