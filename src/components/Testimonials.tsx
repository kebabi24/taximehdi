import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";

import young from "../assets/young.jpg";

const Testimonials = () => {
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
      logo: young,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      state: isShowMore1,
      toggle: (key: boolean) => toggleReadMoreLess1(key),
    },
    {
      id: 2,
      name: "STANDARD CLASS",
      logo: young,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      state: isShowMore2,
      toggle: (key: boolean) => toggleReadMoreLess2(key),
    },
    {
      id: 1,
      name: "ECONOMY CLASS",
      logo: young,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      state: isShowMore1,
      toggle: (key: boolean) => toggleReadMoreLess1(key),
    },
    {
      id: 2,
      name: "STANDARD CLASS",
      logo: young,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      state: isShowMore2,
      toggle: (key: boolean) => toggleReadMoreLess2(key),
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
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto overflow-hidden bg-[url('assets/testii.png')] bg-gray-900 bg-opacity-50"
      id="solutions"
    >
      <div className="text-center ">
        <h1 className="font-outfit text-4xl text-textPrimary font-bold">
          TEMOIGNAGES
        </h1>
        <h1 className="font-outfit text-4xl text-black font-bold mb-10 ">
          DE NOS CLIENTS
        </h1>
      </div>
      <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {solutions.map((solution) => (
          <>
            <div
              key={solution.id}
              className="card px-4 py-4 text-center md:w-[350px] mx-auto md:h-100  shadow cursor-pointer  flex h-full bg-black justify-center items-center rounded-2xl"
            >
              <div className="mb-4 h-50  mx-auto flex flex-col ">
                {/* <img src={solution.logo} alt="" /> */}

                <p className="font-outfit text-sm text-white text-overflow:ellipsis text-justify">
                  {solution.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "yellow",
                      borderRadius: 30,
                      marginRight: "10px",
                    }}
                  >
                    <img
                      style={{
                        width: "45px",
                        height: "45px",
                        backgroundColor: "yellow",
                        borderRadius: 30,
                        marginRight: "10px",
                      }}
                      src={young}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="font-outfit text-2xl text-textPrimary font-bold text-overflow:ellipsis text-justify">
                      Kebabi
                    </h2>
                    <h2 className="font-outfit text-sm text-white text-overflow:ellipsis text-justify">
                      Développeur
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
