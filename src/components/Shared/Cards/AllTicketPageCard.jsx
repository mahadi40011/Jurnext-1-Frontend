import React from "react";

const AllTicketPageCard = ({ ticket }) => {
  const { image, title, transport, perks, price, quantity, time, date } =
    ticket;
  // const ticket = {
  //   id: 6,
  //   title: "Dhaka to Barisal",
  //   image: "https://i.ibb.co/qYcwP8N2/train.jpg",
  //   quantity: 2,
  //   price: 95,
  //   from: "Dhaka",
  //   to: "Barisal",
  //   departure: "2025-12-30 08:00 AM",
  //   status: "paid",
  //   transport_type: "train",
  //   perks: ["AC", "TV"],
  // };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col gap-2">
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
        <div className="lg:col-span-2 flex items-center gap-2">
          <label className="label ">Perks: </label>
          <div className="flex flex-wrap items-center gap-4">
            {perks.map((perk) => (
              <span key={perk} className="bg-green-500 px-2 rounded-lg text-sm">
                {perk}
              </span>
            ))}
          </div>
        </div>

        {/* Pay Now placeholder */}
        <button className="mt-2 w-full bg-lime-500 hover:bg-lime-600 text-white py-2 rounded-lg font-semibold transition">
          See Details
        </button>
      </div>
    </div>
  );
};

export default AllTicketPageCard;
