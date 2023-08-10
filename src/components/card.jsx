import React from "react";

const Card = ({ plan, price, src }) => {
  return (
    <div>
      <div className="card border-2 h-48 w-44 rounded-xl border-gray-500">
        <div className="p-4">
          <img className="w-10 h-10 mb-14" src={src} alt="" />
          <div>
            <h1 className="font-bold text-[#02295a]">{plan}</h1>
            <p className="text-[#9699ab]">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
