const Stepone = ({ handleStep }) => {
  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">Personal info</h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        Please provided your name,email address, and phone number.
      </p>
      <form action="">
        <label className="font-bold text-[#02295a]" htmlFor="">
          Name
        </label>{" "}
        <br />
        <input
          className="h-10 w-full mb-5 p-4 border-2 rounded-lg border-[#d6d9e6]"
          type="text"
        />{" "}
        <br />
        <label className="font-bold text-[#02295a]" htmlFor="">
          Email Address
        </label>{" "}
        <br />
        <input
          className="h-10 w-full p-4 mb-5 border-2 rounded-lg border-[#9699ab]"
          type="email"
          placeholder="yusuff@gmail.com"
        />{" "}
        <br />
        <label
          className="flex justify-between items-end font-bold text-[#02295a]"
          htmlFor=""
        >
          <span>Phone Number</span>{" "}
          <span className=" text-[#ed3548]">This field is required</span>
        </label>{" "}
        <br />
        <input
          className="h-10 w-full p-4 border-2 rounded-lg border-[#d6d9e6]"
          type="tel"
        />
        <br />
      </form>
    </div>
  );
};

export default Stepone;
