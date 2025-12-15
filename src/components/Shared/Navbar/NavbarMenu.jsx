import React from "react";
import MenuItem from "../MenuItem";
import logo from "../../../assets/logo.png";
import { MdDashboard } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const NavbarMenu = () => {
  return (
    <>
      <div className="flex justify-start items-center mb-7">
        <div className="md:w-12 md:h-12 w-8 h-8">
          <img className="h-full " src={logo} alt="Logo" />
        </div>
        <span className="font-bold text-3xl md:text-4xl">Jurnext</span>
      </div>
      <MenuItem label="Home" address="/" icon={IoHome} />
      <MenuItem label="All Ticket" address="/all-ticket" icon={FaTicketAlt} />
      <MenuItem label="Dashboard" address="/dashboard" icon={MdDashboard} />
    </>
  );
};

export default NavbarMenu;
