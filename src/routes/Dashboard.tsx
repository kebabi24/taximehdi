import React, { useState } from "react";

import Example from "../components/Example";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-1 flex-col w-[100%]">
      <div className="flex    bg-white  p-7 shadow shadow-lg  md:w-[100%] ">
        <div className="flex w-[50%] justify-center items-center  ">
          <Example></Example>
        </div>
        <div className="w-[50%] flex justify-end items-end">
          <a className="font-opensans  text-gray800 font-semibold cursor-pointer   text-sm ml-3 self-end">
            Taxi Mehdi (logo)
          </a>
        </div>
      </div>
      {/* <div className="flex flex-1 md:ml-[320px] mt-[12px] ml-[20px] bg-white pt-4 pb-4 shadow rounded-xl shadow-lg mb-5 w-[100%] ">
        <div className="w-[80%]  flex justify-start items-start">
          <h4 className="font-opensans font-extrabold text-gray800  font-size-32  text-md ml-3 ">
            Confirmation de votre course
          </h4>
        </div>
        <div className="w-[20%]">
          <a className="font-opensans  text-gray800 font-semibold cursor-pointer   text-sm ml-3 self-start">
            Modifier
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
