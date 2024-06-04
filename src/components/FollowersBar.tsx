import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { TfiUser } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import stripe1 from "../assets/stripe-1.jpg";
import stripe2 from "../assets/stripe-2.jpg";
import stripe3 from "../assets/stripe-3.jpg";
const FollowersBar = () => {
  const [fbFollow, setFbFollow] = useState(0);
  const [instaFollow, setInstaFollow] = useState(0);
  const [usersNum, setUsersNum] = useState(0);

  const solutions = [
    {
      id: 1,
      name: "Utilisateur",
      icon: <TfiUser size={72} color="#F09721" />,
      //   description: "800 K",
      state: usersNum + " K",
      bg: 1,
    },
    {
      id: 2,
      name: "Facebook",
      icon: <FaFacebookSquare size={72} color="#0866FF" />,
      //   description: "12 K",
      state: fbFollow + " K",
      bg: 2,
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagramSquare size={72} color="#F09721" />,
      //   description: "24 K",
      state: instaFollow + " K",
      bg: 3,
    },
  ];
  useEffect(() => {
    if (fbFollow < 30) {
      setTimeout(() => {
        setFbFollow(fbFollow + 1);
      }, 10);
    }
    if (instaFollow < 50) {
      setTimeout(() => {
        setInstaFollow(instaFollow + 1);
      }, 10);
    }
    if (usersNum < 90) {
      setTimeout(() => {
        setUsersNum(usersNum + 1);
      }, 10);
    }
  }, [fbFollow, instaFollow, usersNum]);
  return (
    <div
      className="md:px-14 px-4 py-16   w-full overflow-hidden bg-[url('assets/waves-numbers.jpg')] bg-cover bg-no-repeat "
      id="solutions"
    >
      <div className="text-center ">
        <h1 className="font-outfit text-4xl text-textPrimary font-bold">
          NOS CHIFFRES{" "}
        </h1>
        <h1 className="font-outfit text-4xl text-white font-bold mb-10 ">
          PARLE DE NOUS MEME
        </h1>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2   grid-cols-2 md:w-11/12 mx-auto gap-12">
        {solutions.map((solution, index) => (
          <>
            <div
              key={index}
              className={`card px-4 py-8  md:w-[350px] bg-[url('assets/stripe-1.png')]  bg-contain bg-no-repeat mx-auto md:h-100  shadow cursor-pointer  flex h-full  justify-center items-center `}
            >
              <div className="mb-4 h-50  mx-auto flex flex-col justify-center items-center">
                <h4 className="font-outfit font-bold text-black font-size-64  text-4xl mb-4">
                  {solution.icon}
                </h4>
                <p className="font-outfit font-bold text-textPrimary drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-overflow:ellipsis text-6xl">
                  {solution.state}
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
