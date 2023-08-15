import React, { useState } from "react";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2 font-bold text-[#02295a]">Monthly</span>
      <div className="relatives">
        <input
          type="checkbox"
          id="is_yearly"
          className="hidden"
          checked={isChecked}
          onChange={toggleHandler}
        />
        <label
          htmlFor="is_yearly"
          className={` ${
            isChecked ? "bg-[#02295a]" : "bg-[#797979]"
          }  w-12 h-6 p-1 rounded-full flex items-center cursor-pointer transition-colors`}
        >
          <span
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              isChecked ? "translate-x-[150%]" : ""
            }`}
          ></span>
        </label>
      </div>
      <span className="ml-2 text-[#9699ab]">Yearly</span>
    </div>
  );
};

export default ToggleButton;
