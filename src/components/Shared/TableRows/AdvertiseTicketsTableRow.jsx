import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AdvertiseTicketsTableRow = ({ ticket, refetch }) => {
  const [advertise, setAdvertise] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { _id, title, transport, from, to, price, date, time } = ticket || {};

  const handleAdvertise = async () => {
    try {
      const { data } = await axiosSecure.patch(`/advertise-ticket/${_id}`, {
        advertise,
      });

      if (data.modifiedCount > 0) {
        refetch();
        setAdvertise(!advertise)
        toast.success(`${advertise? "Advertised Successful": "Remove Advertise Successful"}`);
      } else {
        toast.info("Advertised Unsuccessful");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      toast.error(errorMsg);
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors">
      <td className="py-4 px-6 text-left border-r border-gray-200 font-medium whitespace-nowrap">
        {title}
      </td>
      <td className="py-4 px-6 text-center border-r border-gray-200">
        {transport}
      </td>
      <td className="py-4 px-6 text-center border-r border-gray-200 whitespace-nowrap font-semibold text-blue-600">
        {from} &rarr; {to}
      </td>
      <td className="py-4 px-6 text-center border-r border-gray-200 font-bold">
        ${price}
      </td>
      <td className="py-4 px-6 text-center border-r border-gray-200 whitespace-nowrap">
        {date}, {time}
      </td>
      <td className="py-4 px-6 text-left flex justify-center items-center text-xs">
        <button
          onClick={handleAdvertise}
          className="px-4 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider hover:bg-emerald-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {advertise ? "Advertise" : "Remove"}
        </button>
      </td>
    </tr>
  );
};

export default AdvertiseTicketsTableRow;
