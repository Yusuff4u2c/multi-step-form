import ToggleButton from "./components/toggler.jsx";
import arcade from "/src/assets/images/icon-arcade.svg";
import pro from "/src/assets/images/icon-pro.svg";
import advanced from "/src/assets/images/icon-advanced.svg";
// import check from "/src/assets/images/icon-checkmark.svg";
import PlanCard from "./components/plan-card.jsx";
import { useState } from "react";

const Steptwo = () => {
  // to store the selected plan
  const [plan, setPlan] = useState();

  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">
        Select your plans
      </h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        You have the option of monthly or yearly.
      </p>
      <div className=" flex  flex-col justify-between lg:flex-row">
        <PlanCard
          src={arcade}
          plan="Arcade"
          price="$9/mo"
          selected={plan === "Arcade"}
          onSelect={setPlan}
        />
        <PlanCard
          src={advanced}
          plan="Advanced"
          price="$12/mo"
          selected={plan === "Advanced"}
          onSelect={setPlan}
        />
        <PlanCard
          src={pro}
          plan="Pro"
          price="$15/mo"
          selected={plan === "Pro"}
          onSelect={setPlan}
        />
      </div>
      <div className=" w-full flex justify-center bg-[#fbf8ff] my-8 rounded-lg p-3">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Steptwo;
