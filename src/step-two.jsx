import React from "react";
import Card from "./components/card.jsx";
import ToggleButton from "./components/toggler.jsx";
import arcade from "/src/assets/images/icon-arcade.svg";
import pro from "/src/assets/images/icon-pro.svg";
import advanced from "/src/assets/images/icon-advanced.svg";
import check from "/src/assets/images/icon-checkmark.svg";
const Steptwo = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">
        Select your plans
      </h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        You have the option of monthly or yearly.
      </p>
      <div className=" flex  flex-col justify-between lg:flex-row">
        <Card src={arcade} plan="Arcade" price="$9/mo" />
        <Card src={advanced} plan="Advanced" price="$12/mo" />
        <Card src={pro} plan="Pro" price="$15/mo" />
      </div>
      <div className=" w-full flex justify-center bg-[#d6d9e6] my-8 rounded-lg p-3">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Steptwo;
