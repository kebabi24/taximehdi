import * as React from "react";
import { motion } from "framer-motion";
import { MdDashboard } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const menus = [
  "Tableau de bord",
  "Visualiser les courses",
  "Liste Clients",
  "Parametres",
  "Déconnexion",
];
const icons = [
  <MdDashboard size={22} color="#FF008C" />,
  <IoCarSport size={22} color="#D309E1" />,
  <FaUsers size={22} color="#9C1AFF" />,
  <IoSettingsSharp size={22} color="#7700FF" />,
  <BiLogOut size={22} color="#4400FF" />,
];
//@ts-ignore
export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="liNav"
    >
      <div className="icon-placeholder" style={style}>
        {icons[i]}
      </div>
      <div className="text-placeholder" style={style}>
        <span
          style={{ color: `${colors[i]}` }}
          className="text-sm font-semibold text-[#4400FF]"
        >{`${menus[i]}`}</span>
      </div>
    </motion.li>
  );
};
