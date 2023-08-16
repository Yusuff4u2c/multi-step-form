/* eslint-disable react/prop-types */
const Input = ({
  type = "text",
  name,
  placeholder,
  onChange,
  value,
  className = "",
  error,
  ...otherProps
}) => {
  return (
    <input
      className={`h-10 w-full mb-5 p-4 border-none outline rounded-lg outline-[#d6d9e6] ${className} ${
        error
          ? "outline-red-500 focus:outline-red-500"
          : "focus:outline-blue-950"
      }`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default Input;
