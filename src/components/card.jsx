import React from "react";

const Card = ({ plan, price, src }) => {
  return (
    <div>
      <div className="card border-4  border-[#9699ab] mb-10 h-28 lg:h-48 w-full lg:w-44 rounded-xl">
        <div className="p-4 flex items-center gap-4">
          <img className="w-10 h-10 lg:mb-14" src={src} alt="" />
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
