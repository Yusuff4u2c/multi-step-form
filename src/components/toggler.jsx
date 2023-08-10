import React, { useState } from "react";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2 font-bold text-[#02295a]">Monthly</span>
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={isChecked}
          onChange={toggleHandler}
        />
        <label
          htmlFor="toggle"
          className="toggle-label bg-[#02295a] w-12 h-6 rounded-full flex items-center cursor-pointer"
        >
          <span
            className={`toggle-handle bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></span>
        </label>
      </div>
      <span className="ml-2 text-[#9699ab]">Yearly</span>
    </div>
  );
};

export default ToggleButton;
