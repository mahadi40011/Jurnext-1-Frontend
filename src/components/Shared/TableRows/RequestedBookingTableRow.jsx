import React from "react";

const RequestedBookingTableRow = ({ bookingReqData }) => {
  const { customer, ticketPrice, ticketTitle, quantity, status } =
    bookingReqData;

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{customer.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{ticketTitle}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
        <p className="text-gray-900 ">{quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
        <p className="text-gray-900 ">
          <span
            className={`${status === "pending" ? "bg-yellow-200" : ""} ${
              status === "accepted" ? "bg-green-200" : ""
            } ${
              status === "rejected" ? "bg-red-200" : ""
            } px-3 pb-0.5 rounded-full font-normal`}
          >
            {" "}
            {status}
          </span>
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
        <p className="text-gray-900 ">${ticketPrice * quantity}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {/* <button
          className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Cancel</span>
        </button> */}
        <button>accept</button>
      </td>
    </tr>
  );
};

export default RequestedBookingTableRow;
