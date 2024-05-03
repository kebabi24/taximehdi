import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { TfiUser } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const FollowersBar = () => {
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
      name: "Cliens satisfait",
      icon: <TfiUser size={72} color="#F09721" />,
      description: "800 K",
      state: isShowMore1,
      toggle: (key: boolean) => toggleReadMoreLess1(key),
    },
    {
      id: 2,
      name: "Facebook",
      icon: <FaFacebookSquare size={72} color="#0866FF" />,
      description: "12 K",
      state: isShowMore2,
      toggle: (key: boolean) => toggleReadMoreLess2(key),
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagramSquare size={72} color="#F09721" />,
      description: "24 K",
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
      className="md:px-14 px-4 py-32 max-w-screen-2xl mx-auto bg-backgroundC2 overflow-hidden o"
      id="solutions"
    >
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {solutions.map((solution) => (
          <>
            <div
              key={solution.id}
              className="card px-4 py-8 text-center md:w-[350px] mx-auto md:h-100  shadow cursor-pointer  flex h-full  justify-center items-center "
            >
              <div className="mb-4 h-50  mx-auto flex flex-col justify-center items-center">
                {/* <img src={solution.logo} alt="" /> */}
                <h4 className="font-outfit font-bold text-black font-size-64  text-4xl mb-4">
                  {solution.icon}
                </h4>
                <p className="font-outfit font-bold text-black text-overflow:ellipsis text-4xl">
                  {solution.description}
                </p>
                <h4 className="font-outfit font-bold text-[#C1C1C1] font-size-32 mt-4 text-2xl">
                  {solution.name}
                </h4>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FollowersBar;
