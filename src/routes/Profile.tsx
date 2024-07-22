// Theme
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
// React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import Example from "../components/Example";
import lg from "../assets/logoo.png";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  let navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-1 flex-col w-[100%]">
      <div className="flex    bg-white  p-4 shadow shadow-lg  md:w-[100%] mb-5">
        <div className="flex w-[50%] justify-center items-center  ">
          <Example></Example>
        </div>
        <div className="w-[50%] flex justify-end items-end">
          <a className="cursor-pointer ml-3 self-end">
          <img
            src={lg}
            alt=""
            style={{ width: "150px", height:"50px" }}
            onClick={() => navigate("/home")}
          />
          </a>
        </div>
      </div>

      <div
        style={{
          
          height: "auto",
        }}
        className="flex self-center md:w-1/2 w-full"
      >
        <div className="flex flex-col w-full pt-8 pb-4 shadow rounded-xl shadow-xl mb-5 align-start">
          <h4 className="font-opensans font-extrabold text-gray800  font-size-36 mb-5 text-xl ml-5 self-start">
            Informations personnelle
          </h4>

        </div>
      </div>
    </div>
  );
};

export default Profile;
