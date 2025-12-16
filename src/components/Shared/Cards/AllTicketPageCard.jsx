import React from "react";
import { Link } from "react-router";

const AllTicketPageCard = ({ ticket }) => {
  const {_id, image, title, transport, perks, price, quantity, time, date } =
    ticket;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col gap-2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">
            {ticket.from} → {ticket.to}
          </p>
          <p className="text-sm">Transport Type: {transport}</p>
          <p className="text-sm">
            Departure: {date} {","} {time}
          </p>
          <p className="text-sm">Quantity: {quantity}</p>
          <p className="text-sm font-medium">Total: ${price}</p>
          <div className="lg:col-span-2 flex gap-2">
            <label className="label ">Perks: </label>
            <div className="flex flex-wrap items-center gap-2">
              {perks.map((perk) => (
                <span
                  key={perk}
                  className="bg-green-200 px-2 rounded-lg text-xs"
                >
                  {perk}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* See Details Button */}
        <Link
          to={`/tickets/${_id}`}
          className="mt-2 w-full bg-lime-500 hover:bg-lime-600 text-white text-center py-2 rounded-lg font-semibold transition"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default AllTicketPageCard;
