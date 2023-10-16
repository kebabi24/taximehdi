import React, { useState, useEffect } from "react";
import photo2 from "../assets/2.jpg";
const Team = () => {
  return (
    <div className="md:px-14 px-4 py-8 max-w-screen-2x1 mx-auto ">
      <div className="my-24 md:my-8 py-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-semibold mb-4 text-brandPrimary md:w-3/4 leading-snug ">
            Notre équipe
          </h1>
          <p className="text-brandPrimary">
            ACSIOME TECHNOLOGIES est composé d'une équipe jeune d'ingénieurs
            algériens dans des domaines variés telle que l'informatique, la
            recherche opérationnelle, génie industrielle et finance. Cette
            variété dont fait objet l'équipe permet à ACSIOME TECHNOLOGIES
            d'offrir un large panel d'expertise et couvre toute l'activité et
            métiers de nos partenaires.
          </p>
        </div>
        <div>
          <img src={photo2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Team;
