import React from "react";
import logo from "../../../assets/logo.png";
import Container from "../Container";
import { Link, NavLink } from "react-router";
import HoverButton from "../Buttons/HoverButton";
import { HiMenu } from "react-icons/hi";
import NavbarMenu from "./NavbarMenu";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../LoadingSpinner";
import MenuItem from "../MenuItem";
import { LuCircleUser } from "react-icons/lu";
import { GrLogout } from "react-icons/gr";

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
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                      <img
                        className="rounded-full"
                        referrerPolicy="no-referrer"
                        src={user.photoURL}
                        alt="profile"
                        height="40"
                        width="40"
                      />
                    </div>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
                    >
                      <MenuItem
                        label={"Profile"}
                        address={"/dashboard/profile"}
                        icon={LuCircleUser}
                      />
                      <button className="flex cursor-pointer w-full items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
                        <GrLogout className="w-5 h-5" />
                        <span className="mx-4 font-medium">Logout</span>
                      </button>
                    </ul>
                  </div>
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
