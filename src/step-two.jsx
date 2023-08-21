/* eslint-disable react/prop-types */
import ToggleButton from "./components/toggler.jsx";
import arcade from "/src/assets/images/icon-arcade.svg";
import pro from "/src/assets/images/icon-pro.svg";
import advanced from "/src/assets/images/icon-advanced.svg";
// import check from "/src/assets/images/icon-checkmark.svg";
import PlanCard from "./components/plan-card.jsx";
import { useContext, useEffect, useState } from "react";
import RegisterContext from "./contexts/RegisterContext.js";

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
  const {
    selectedPlan,
    isYearly,
    setIsYearly,
    setSelectedPlan,
    validationErrors,
  } = useContext(RegisterContext);

  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">
        Select your plans
      </h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        You have the option of monthly or yearly.
      </p>
      {validationErrors?.selectedPlan && (
        <p className="text-sm text-red-500">{validationErrors.selectedPlan}</p>
      )}
      <div className=" flex  flex-col justify-between lg:flex-row gap-6">
        {allPlans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            selected={plan.name === selectedPlan?.name}
            onSelect={setSelectedPlan}
          />
        ))}
      </div>
      <div className=" w-full flex justify-center bg-[#fbf8ff] my-8 rounded-lg p-3">
        <ToggleButton
          onChange={(value) => setIsYearly(value)}
          value={isYearly}
          offLabel="Monthly"
          onLabel="Yearly"
        />
      </div>
    </div>
  );
};

export default Steptwo;
