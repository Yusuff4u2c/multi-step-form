/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ToggleButton = ({
  onChange,
  value,
  offLabel = "off",
  onLabel = "on",
}) => {
  const [isChecked, setIsChecked] = useState(value);

  const toggleHandler = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="flex items-center">
      <span
        className={`mr-2 font-bold ${
          !isChecked ? "text-[#02295a]" : "text-[#9699ab]"
        } capitalize`}
      >
        {offLabel}
      </span>
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
      <span
        className={`ml-2 font-bold ${
          isChecked ? "text-[#02295a]" : "text-[#9699ab]"
        } capitalize`}
      >
        {onLabel}
      </span>
    </div>
  );
};

export default ToggleButton;
