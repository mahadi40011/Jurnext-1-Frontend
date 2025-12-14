import React from "react";
import logo from "../../../assets/logo.png";
import Container from "../Container";
import { NavLink } from "react-router";
import HoverButton from "../Buttons/HoverButton";

const Navbar = () => {
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/all-ticket", name: "All-ticket" },
    { path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 ">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <div className="md:w-12 md:h-12 w-8 h-8">
                <img
                  className="h-full "
                  src={logo}
                  alt="Logo"
                />
              </div>
              <span className="font-bold text-3xl md:text-4xl">Jurnext</span>
            </div>
            <div className="justify-center items-center gap-5 hidden lg:flex">
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
            <div className="flex justify-center items-center gap-5">
              <NavLink to="/login">
                <HoverButton label="Login" />
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
