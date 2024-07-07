import React, { useState } from "react";

import Example from "../components/Example";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Example></Example>
      <div className="md:ml-[320px] mt-[90px] ml-[20px]">
        <span>teegit xt</span>
      </div>
    </div>
  );
};

export default Dashboard;
