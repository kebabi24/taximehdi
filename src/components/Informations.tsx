import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";

const Informations = () => {
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
      name: "Télécharger l'application Taxi Mehdi gratuitement!",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      state: isShowMore1,
      toggle: (key: boolean) => toggleReadMoreLess1(key),
      button: true,
    },
  ];

  const toggleReadMoreLess1 = (state: boolean) => {
    setIsShowMore1(!state);
  };

  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto  overflow-hidden"
      id="solutions"
    >
      <div className="text-center ">
        <h1 className="font-outfit text-4xl text-textPrimary font-bold">
          DOWNLOAD
        </h1>
        <h1 className="font-outfit text-4xl text-black font-bold mb-10 ">
          NOTRE APPLICATION
        </h1>
      </div>
      <div className="mt-14 ">
        {solutions.map((solution) => (
          <>
            <div
              key={solution.id}
              className="card px-4 py-8  md:w-[450px] md:mx-56 md:h-100   cursor-pointer  flex h-full bg-white "
            >
              <div className="mb-4 h-50  mx-auto flex flex-col ">
                {/* <img src={solution.logo} alt="" /> */}
                <h4 className="font-outfit font-bold text-black font-size-32 mb-5 text-2xl text-justify">
                  {solution.name}
                </h4>
                <p className="font-outfit text-sm text-neutralDgrey text-overflow:ellipsis text-justify mb-5">
                  {solution.description}
                </p>
                {solution.button && (
                  <div
                    style={{ height: "50px" }}
                    className="flex flex-row justify-center align-center"
                  >
                    <button
                      style={{
                        height: "100%",
                        width: "48%",
                        marginRight: "5px",
                        borderRadius: 30,
                        color: "white",
                      }}
                      className="bg-black mb-5 "
                    >
                      Google Play
                    </button>
                    <button
                      style={{
                        height: "100%",
                        width: "48%",
                        borderRadius: 30,
                        color: "white",
                      }}
                      className="bg-black mb-5 "
                    >
                      App Store
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Informations;
