import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Divider } from "@mui/material";
import { IoIosSpeedometer } from "react-icons/io";
import { MdCleaningServices } from "react-icons/md";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
const Product = () => {
  const [insideView, setInsideView] = useState(false);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className="md:px-14  py-16  md:mr-16 md:ml-16 md:mt-16 md:mb-16 mr-5 ml-5 mt-5 mb-5  bg-bgB overflow-hidden rounded-2xl  "
      id="solutions"
    >
      <div className="text-center ">
        <h1 className="font-outfit text-4xl text-textPrimary font-bold">NOS</h1>
        <h1 className="font-outfit text-4xl text-bgWhite font-bold mb-10 ">
          OFFRES
        </h1>
      </div>
      <InView onChange={(inView, entry) => setInsideView(inView)}>
        {({ inView, ref, entry }) => (
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            ref={ref}
            className=" md:pl-36 md:pr-36 px-4 mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12 "
          >
            {inView && (
              <motion.li
                className="item card px-2 py-6   md:h-100  shadow  flex h-full bg-white rounded-lg "
                variants={item}
              >
                <div className="mb-4 h-50 md:px-4    flex flex-col ">
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
                  <Divider sx={{ minWidth: "100%", marginBottom: 3 }} />
                  <div className="flex w-full p-1 mb-2 ">
                    <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
                    <p>Des chauffeurs ponctuelles & a l'heure</p>
                  </div>

                  <div className="flex w-full p-1 ">
                    <IoIosSpeedometer size={24} style={{ marginRight: 15 }} />
                    <p>Des chauffeurs ponctuelles & a l'heure</p>
                  </div>
                </div>
              </motion.li>
            )}

            {inView && (
              <motion.li
                className="item card px-2 py-6   md:h-100  shadow  flex h-full bg-white rounded-lg "
                variants={item}
              >
                <div className="mb-4 h-50 md:px-4  flex flex-col ">
                  <div
                    className={`text-center p-1 h-8 w-20 bg-bg2 rounded-md mb-8 text-bgGreen font-semibold`}
                  >
                    <p>Standard</p>
                  </div>
                  <div
                    className={`flex flex-col p-1 h-10 w-56  rounded-md  text-2xl  text-black font-bold`}
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
              </motion.li>
            )}

            {inView && (
              <motion.li
                className="item card px-2 py-6   md:h-100  shadow   flex h-full bg-white rounded-lg "
                variants={item}
              >
                <div className="mb-4 h-50 md:px-4    flex flex-col ">
                  <div
                    className={`text-center p-1 h-8 w-20 bg-bg3 rounded-md mb-8 text-bgWhite font-semibold`}
                  >
                    <p>Confort</p>
                  </div>
                  <div
                    className={`flex flex-col p-1 h-10 w-56  rounded-md  text-2xl  text-black font-bold`}
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
              </motion.li>
            )}
            {inView && (
              <motion.li
                className="item card px-2 py-6   md:h-100  shadow   flex h-full bg-white rounded-lg "
                variants={item}
              >
                <div className="mb-4 h-50 md:px-4    flex flex-col ">
                  <div
                    className={`text-center p-1 h-8 w-20 bg-bg3 rounded-md mb-8 text-bgWhite font-semibold`}
                  >
                    <p>Confort</p>
                  </div>
                  <div
                    className={`flex flex-col p-1 h-10 w-56  rounded-md  text-2xl  text-black font-bold`}
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
              </motion.li>
            )}
          </motion.ul>
        )}
      </InView>
    </div>
  );
};

export default Product;
