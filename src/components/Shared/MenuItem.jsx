/* eslint-disable no-unused-vars */
import { NavLink } from "react-router";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-3 my-2 transition-all duration-300 transform rounded-md group ${
          isActive
            ? "bg-lime-100/75 text-lime-600 "
            : "text-gray-500 hover:bg-lime-50 hover:text-lime-600"
        }`
      }
    >
      <Icon
        className={`w-5 h-5 transition-colors duration-300 ${"group-hover:scale-110"}`}
      />

      <span className="mx-4 font-bold text-sm tracking-wide">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
