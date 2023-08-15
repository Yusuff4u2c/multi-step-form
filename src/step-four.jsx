const StepFour = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">Finishing up</h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        Double-check everything looks OK before confirming.
      </p>
      <div>
        <div className="p-8 rounded-lg bg-[#fbf8ff]">
          <div className="flex justify-between  border-b">
            <div className=" mb-5">
              <h1 className="font-bold text-[#02295a]">Arcade(Monthly)</h1>
              <a href="" className=" underline">
                Change
              </a>
            </div>
            <h1 className="font-bold text-[#02295a]">$9/mo</h1>
          </div>
          <div className="flex justify-between my-5">
            <p className=" text-[#9699ab]">Online service</p>

            <h1 className="font-medium text-[#02295a]">+$1/mo</h1>
          </div>
          <div className="flex justify-between">
            <p className=" text-[#9699ab]">Large storage</p>

            <h1 className="font-medium text-[#02295a]">+$2/mo</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-8">
        <p className=" text-[#9699ab]">Total (per month)</p>

        <h1 className="font-bold text-[#473dff]">+$12/mo</h1>
      </div>
    </div>
  );
};

export default StepFour;
