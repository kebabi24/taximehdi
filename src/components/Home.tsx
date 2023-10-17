import { Carousel } from "flowbite-react";
import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
          </div>
          <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
          </div>
          <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
