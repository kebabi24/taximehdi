import React, { useState, useEffect } from "react";
import danone from "../assets/danone.jpg";
import casa from "../assets/casa.png";
import prima from "../assets/prima.png";
import mami from "../assets/mami.jpg";
import bellat from "../assets/bellat.png";
import hamoud from "../assets/hamoud.png";
import venus from "../assets/venus.png";
import idk from "../assets/idk.png";
import ldm from "../assets/ldm.jpg";
import edelweiss from "../assets/edelweiss.jpg";
import agro from "../assets/agro-film.png";
import k from "../assets/k.jpg";

const Partner = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto bg-bgWhite">
      <div className="text-center my-2">
        <h1 className="text-4xl text-neutralDGrey font-semibold mb-2">
          ILS NOUS ONT FAIT CONFIANCE
        </h1>
        <h4 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Industrie agro-alimentaire
        </h4>
        <div className="my-12 md:my-8 py-8 flex flex-wrap items-center justify-around gap-8">
          <img src={danone} alt="" />
          <img src={casa} alt="" />
          <img src={prima} alt="" />
          <img src={mami} alt="" />
          <img src={bellat} alt="" />
          <img src={hamoud} alt="" />
        </div>

        <h4 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Industrie santé et bien étre
        </h4>
        <div className="my-12 md:my-8 py-8 flex flex-wrap items-center justify-around gap-8">
          <img src={venus} alt="" />
          <img src={idk} alt="" />
          <img src={ldm} alt="" />
        </div>

        <h4 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Industrie transformation plastique
        </h4>
        <div className="my-12 md:my-8 py-8 flex flex-wrap items-center justify-around gap-8">
          <img src={edelweiss} alt="" />
          <img src={agro} alt="" />
          <img src={k} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
