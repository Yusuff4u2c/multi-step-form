import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Input = forwardRef(
  (
    {
      type = "text",
      name,
      placeholder,
      onChange,
      className = "",
      error,
      ...otherProps
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`h-10 w-full mb-5 p-4 border-none outline rounded-lg outline-[#d6d9e6] ${className} ${
          error
            ? "outline-red-500 focus:outline-red-500"
            : "focus:outline-blue-950"
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...otherProps}
      />
    );
  }
);

export default Input;
