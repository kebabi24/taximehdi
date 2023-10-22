import { Carousel } from "flowbite-react";
import React, { useState, useEffect } from "react";
import banner from "../assets/banner.svg";
import photo1 from "../assets/1.jpg";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="h-[calc(100vh-5rem)] overflow-hidden">
      <div className="bg-cover bg-[url('/banner.svg')] bg-center bg-no-repeat h-full w-full">
        <div className="container mx-auto flex flex-col my-auto align-middle h-full">
          <motion.div
            className=" my-auto  mx-auto lg:mx-20 w-10/12 lg:w-2/5"
            variants={fadeIn("down", 0.01)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 1 }}
          >
            <h1 className="lg:text-5xl md:text-4xl  mt-16 mb-4">
              <span className="text-violet-500 font-semibold">Lets'start</span>{" "}
              with Acsiome Technologies
            </h1>
            <p className="lg:text-2xl md:text-1xl mb-4">
              ACSIOME TECHNOLOGIES fondée en 2015, est créditée d’un capital
              expérience au savoir-faire dans le domaine de l'intégration de
              solutions SI reconnus et apprécié par nos partenaires métier.
            </p>
            <div className="flex items-center">
              <button className="rounded px-10 py-3 text-white bg-violet-500 hover:bg-violet-600">
                Naviguer dans notre univers
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
