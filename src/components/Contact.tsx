import React, { useState, useEffect } from "react";
import map from "../assets/map.png";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
const Contact = () => {
  const [formData, setFormData] = useState({
    objet: " ",
    email: " ",
    phone: " ",
    message: "",
  });
  const [succes, setSucces] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const { objet, email, phone, message } = formData;
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = () => {
    fetch("http://207.180.222.144:3024/api/v1/sendMail", {
      method: "POST",
      body: JSON.stringify({
        formData,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSucces(true);
        setFormData({ objet: " ", email: " ", phone: " ", message: "" });

        setTimeout(() => setSucces(false), 5000);
      })
      .catch((err) => {
        console.log(err.message);
        setFailed(true);
        setTimeout(() => setFailed(false), 5000);
      });
  };
  return (
    <div
      className="md:px-14 px-4 py-8 max-w-screen-2xl mx-auto bg-black overflow-hidden"
      id="contact"
    >
      <div className="md:px-40 px-8 my-12  py-4 flex flex-col  md:flex-row items-center justify-around gap-12">
        <div className="card flex flex-col px-4 py-2 w-[350px] mx-auto md:h-100  shadow cursor-pointer  flex h-full bg-black">
          <span className="font-outfit font-semibold text-white mb-5">
            A PROPOS TAXI MEHDI
          </span>
          <div
            style={{
              height: 6,
              width: "90%",
              backgroundColor: "#F09721",
              borderRadius: 2,
              marginBottom: 20,
            }}
          ></div>
          <span className="font-outfit  text-white mb-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </span>
          <div className="flex">
            <span className="font-outfit font-semibold text-textPrimary mr-3">
              <FaFacebookSquare></FaFacebookSquare>
            </span>
            <span className="font-outfit font-semibold text-textPrimary mr-3">
              <FaInstagramSquare></FaInstagramSquare>
            </span>
            <span className="font-outfit font-semibold text-textPrimary mr-3">
              <FaTwitter></FaTwitter>
            </span>
          </div>
        </div>
        <div className="card flex flex-col px-4 py-2  w-[350px] mx-auto md:h-100  shadow cursor-pointer  flex h-full bg-black">
          <span className="font-outfit font-semibold text-white mb-5">
            TELECHARGER
          </span>
          <div
            style={{
              height: 6,
              width: "90%",
              backgroundColor: "#F09721",
              borderRadius: 2,
              marginBottom: 20,
            }}
          ></div>
          <span className="font-outfit  text-white mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </span>
          <div className="flex mb-6 items-center ">
            <span className="font-outfit  text-textPrimary mr-3">
              Android Utilisateur
            </span>
            <span className="font-outfit font-semibold text-white">
              {" "}
              <IoLogoAndroid></IoLogoAndroid>
            </span>
          </div>
          <div className="flex items-center ">
            <span className="font-outfit  text-textPrimary mr-3">
              iOS Utilisateur
            </span>
            <span className="font-outfit font-semibold text-white">
              {" "}
              <FaApple></FaApple>
            </span>
          </div>
        </div>
        <div className="card flex flex-col px-4 py-2 w-[350px] mx-auto md:h-100  shadow cursor-pointer  flex h-full bg-black ">
          <span className="font-outfit font-semibold text-white mb-5">
            CONTACT
          </span>
          <div
            style={{
              height: 6,
              width: "90%",
              backgroundColor: "#F09721",
              borderRadius: 2,
              marginBottom: 20,
            }}
          ></div>
          <div className="flex items-center ">
            <span className="font-outfit  text-textPrimary mr-3 ">
              <FaLocationDot></FaLocationDot>
            </span>
            <span className="font-outfit  text-white">
              Bon accueil, Guelma, Algérie.
            </span>
          </div>
          <div className="flex items-center ">
            <span className="font-outfit  text-textPrimary mr-3 ">
              <IoPhonePortrait></IoPhonePortrait>
            </span>
            <span className="font-outfit  text-white">+213 6 71 42 14 48</span>
          </div>
          <div className="flex items-center items-center ">
            <span className="font-outfit  text-textPrimary mr-3">
              <MdOutlineMailOutline></MdOutlineMailOutline>
            </span>
            <span className="font-outfit  text-white">
              contact@taximehdi.com
            </span>
          </div>
          <div className="flex items-center mb-11">
            <span className="font-outfit  text-textPrimary mr-3">
              <CgWebsite></CgWebsite>
            </span>
            <span className="font-outfit  text-white">www.taximehdi.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
