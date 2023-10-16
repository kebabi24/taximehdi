import React, { useState, useEffect } from "react";
import photo1 from "../assets/1.jpg";
const Goals = () => {
  return (
    <div className="md:px-14 px-4 py-8 max-w-screen-2x1 mx-auto bg-bgGreen">
      <div className="my-24 md:my-8 py-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div>
          <img src={photo1} alt="" />
        </div>
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug ">
            Objectif de l'entreprie{" "}
          </h1>
          <p className="text-white">
            ACSIOME TECHNOLOGIES se fixe comme objectifs l'amélioration continue
            de l'expérience et la maitrise des nouvelles technologies, afin de
            proposer à ses partenaires les meilleurs services et une base de
            connaissances à niveau.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
