import ToggleButton from "./components/toggler.jsx";
import arcade from "/src/assets/images/icon-arcade.svg";
import pro from "/src/assets/images/icon-pro.svg";
import advanced from "/src/assets/images/icon-advanced.svg";
// import check from "/src/assets/images/icon-checkmark.svg";
import PlanCard from "./components/plan-card.jsx";
import { useState } from "react";

const allPlans = [
  {
    name: "Arcade",
    icon: arcade,
    pricing: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    name: "Advanced",
    icon: advanced,
    pricing: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    name: "Pro",
    icon: pro,
    pricing: {
      monthly: 15,
      yearly: 150,
    },
  },
];

const Steptwo = () => {
  // to store the name of the selected plan e.g. Pro, Advanced
  const [selectedPlan, setSelectedPlan] = useState();

  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">
        Select your plans
      </h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        You have the option of monthly or yearly.
      </p>
      <div className=" flex  flex-col justify-between lg:flex-row gap-6">
        {allPlans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            selected={plan.name === selectedPlan}
            onSelect={setSelectedPlan}
          />
        ))}
      </div>
      <div className=" w-full flex justify-center bg-[#fbf8ff] my-8 rounded-lg p-3">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Steptwo;
