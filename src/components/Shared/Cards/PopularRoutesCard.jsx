import React from 'react';

const PopularRoutesCard = ({ route }) => {
  return (
    <div
      key={route.id}
      className="relative group overflow-hidden rounded-2xl h-64 cursor-pointer"
    >
      <img
        src={route.image}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        alt={route.to}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-xs font-medium text-lime-400 uppercase tracking-widest">
          {route.from} to
        </p>
        <h3 className="text-xl font-bold">{route.to}</h3>
        <p className="mt-2 text-sm font-semibold bg-white/20 backdrop-blur-md inline-block px-2 py-1 rounded">
          Starting from {route.price} TK
        </p>
      </div>
    </div>
  );
};

export default PopularRoutesCard;