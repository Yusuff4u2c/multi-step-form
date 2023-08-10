import React from "react";
import Addoncard from "./components/add-on-card";
const Stepthree = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">Pick add-ons</h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        Add-ons help to enhance your gaming experience.
      </p>
      <Addoncard />
    </div>
  );
};

export default Stepthree;
