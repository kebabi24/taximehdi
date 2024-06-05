import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";

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
      name: "ECONOMY CLASS",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      state: isShowMore1,
      toggle: (key: boolean) => toggleReadMoreLess1(key),
    },
    {
      id: 2,
      name: "STANDARD CLASS",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      state: isShowMore2,
      toggle: (key: boolean) => toggleReadMoreLess2(key),
    },
    {
      id: 3,
      name: "BUSINESS CLASS",

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
      className="md:px-14 px-4 py-16 w-full bg-yellow overflow-hidden"
      id="solutions"
    >
      <div className="text-center ">
        <h1 className="font-outfit text-4xl text-textPrimary font-bold">NOS</h1>
        <h1 className="font-outfit text-4xl text-black font-bold mb-10 ">
          OFFRES
        </h1>
      </div>
      <div className="mt-14 grid px-80 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  bg-bgGreen">
        {solutions.map((solution) => (
          <>
            <div
              key={solution.id}
              className="card px-4 py-8 text-center md:w-[350px] mx-auto md:h-100  shadow cursor-pointer  flex h-full bg-backgroundC2 justify-center items-center "
            >
              <div className="mb-4 h-50  mx-auto flex flex-col justify-center items-center">
                {/* <img src={solution.logo} alt="" /> */}
                <h4 className="font-outfit font-bold text-black font-size-32 mb-5 text-2xl">
                  {solution.name}
                </h4>
                <p className="font-outfit text-sm text-neutralDgrey text-overflow:ellipsis">
                  {solution.description}
                </p>
                <h4 className="font-outfit font-bold text-black font-size-32 mt-10 text-2xl">
                  A partir de 200 DZD
                </h4>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Product;
