import React, { useState } from "react";

import Example from "../components/Sidebar";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Example></Example>
    </div>
  );
};

export default Dashboard;
