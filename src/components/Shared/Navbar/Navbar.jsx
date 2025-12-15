import React from "react";
import logo from "../../../assets/logo.png";
import Container from "../Container";
import { NavLink } from "react-router";
import HoverButton from "../Buttons/HoverButton";
import { HiMenu } from "react-icons/hi";
import NavbarMenu from "./NavbarMenu";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../LoadingSpinner";

const Navbar = () => {
  const { user, loading } = useAuth();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/all-ticket", name: "All-ticket" },
    { path: "/dashboard", name: "Dashboard" },
  ];

  if (loading) return <LoadingSpinner />;

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 ">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <div className="md:w-12 md:h-12 w-8 h-8">
                <img className="h-full " src={logo} alt="Logo" />
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
            <div className="">
              <div className="lg:hidden">
                <div className="drawer">
                  <input
                    id="my-drawer-1"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-1" className="drawer-button">
                      <HiMenu size={28} />
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-1"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 min-h-full w-fit p-4">
                      <NavbarMenu />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                {user ? (
                  <img
                    className="rounded-full"
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                    alt="profile"
                    height="40"
                    width="40"
                  />
                ) : (
                  <NavLink to="/login">
                    <HoverButton label="Login" />
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
