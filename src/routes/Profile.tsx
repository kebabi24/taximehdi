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

const Profile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-1 flex-col w-[100%]">
      <div className="flex    bg-white  p-7 shadow shadow-lg  md:w-[100%] mb-5">
        <div className="flex w-[50%] justify-center items-center  ">
          <Example></Example>
        </div>
        <div className="w-[50%] flex justify-end items-end">
          <a className="font-opensans  text-gray800 font-semibold cursor-pointer   text-sm ml-3 self-end">
            Taxi Mehdi (logo)
          </a>
        </div>
      </div>

      <div
        style={{
          width: "95%",
          height: "600px",
        }}
        className="flex self-center"
      ></div>
    </div>
  );
};

export default Profile;
