import React from "react";
import logo from "../../../assets/logo.png";
import Container from "../Container";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/all-ticket", name: "All-ticket" },
    { path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-2 '>
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="w-16 h-12 overflow-hidden ">
              <img
                className=" w-full h-full scale-140 "
                src={logo}
                alt="Logo"
              />
            </div>
            <span className="font-bold text-4xl">Jurnext</span>
          </div>
          <div className="flex justify-center items-center gap-5">
            {navItems.map((navLink, index) => (
              <NavLink
                key={index}
                to={navLink.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "text-gray-600 hover:text-primary"
                }
              >
                {navLink.name}
              </NavLink>
            ))}
          </div>
          <div className="">
            <>
              <NavLink
                to="/login"
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Sign Up
              </NavLink>
            </>
          </div>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default Navbar;
