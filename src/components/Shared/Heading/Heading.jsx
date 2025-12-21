import React from "react";

const Heading = ({title, subtitle}) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-gray-800">
        {title}
      </h2>
      <p className="text-gray-500 mt-2 font-medium">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
