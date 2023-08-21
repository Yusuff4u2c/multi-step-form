/* eslint-disable react/prop-types */
import { useContext } from "react";
import Input from "./components/input";
import RegisterContext from "./contexts/RegisterContext";

const Stepone = () => {
  const {
    fullName,
    email,
    phonenumber,
    validationErrors,
    setFullName,
    setEmail,
    setPhonenumber,
  } = useContext(RegisterContext);

  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">Personal info</h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        Please provided your name,email address, and phone number.
      </p>

      <div>
        <div>
          <label
            className="flex justify-between items-end font-bold text-[#02295a]"
            htmlFor="full_name"
          >
            <span>Full Name</span>
            {validationErrors?.full_name && (
              <span className=" text-[#ed3548] font-light first-letter:uppercase">
                {validationErrors?.full_name}
              </span>
            )}
          </label>{" "}
          <Input
            id="full_name"
            name="full_name"
            placeholder={"Full Name"}
            value={fullName}
            onChange={(e) => setFullName(e.currentTarget.value)}
            error={validationErrors?.full_name ?? undefined}
          />
        </div>
        <div>
          <label
            className="flex justify-between items-end font-bold text-[#02295a]"
            htmlFor="email"
          >
            <span>Email Address</span>
            {validationErrors?.email && (
              <span className=" text-[#ed3548] font-light first-letter:uppercase">
                {validationErrors?.email}
              </span>
            )}
          </label>{" "}
          <Input
            id="email"
            name="email"
            placeholder={"Email Address"}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            error={validationErrors?.email ?? undefined}
          />
        </div>

        <div>
          <label
            className="flex justify-between items-end font-bold text-[#02295a]"
            htmlFor="phone_number"
          >
            <span>Phone Number</span>{" "}
            {validationErrors?.phonenumber && (
              <span className=" text-[#ed3548] font-light first-letter:uppercase">
                {validationErrors?.phonenumber}
              </span>
            )}
          </label>{" "}
          <Input
            id="phone_number"
            name="phone_number"
            placeholder={"Phone Number"}
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.currentTarget.value)}
            error={validationErrors?.phonenumber ?? undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default Stepone;
