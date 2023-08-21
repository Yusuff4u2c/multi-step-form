import { useContext } from "react";
import RegisterContext from "./contexts/RegisterContext";

const StepFour = () => {
  const { selectedPlan, isYearly, selectedAddons } =
    useContext(RegisterContext);

  const planAmount = isYearly
    ? selectedPlan.pricing.yearly
    : selectedPlan.pricing.monthly;
  const planPostfix = isYearly ? "yr" : "mo";

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
              <h1 className="font-bold text-[#02295a]">
                {selectedPlan.name}({isYearly ? "Yearly" : "Monthly"})
              </h1>
              <a href="" className=" underline">
                Change
              </a>
            </div>
            <h1 className="font-bold text-[#02295a]">
              ${planAmount}
              /({planPostfix})
            </h1>
          </div>
          {selectedAddons.map((addon, index) => (
            <div key={index} className="flex justify-between my-5">
              <p className=" text-[#9699ab]">{addon.name}</p>

              <h1 className="font-medium text-[#02295a]">
                +${isYearly ? addon.pricing.yearly : addon.pricing.monthly}/
                {planPostfix}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between p-8">
        <p className=" text-[#9699ab]">Total (per month)</p>

        <h1 className="font-bold text-[#473dff]">+$12/{planPostfix}</h1>
      </div>
    </div>
  );
};

export default StepFour;
