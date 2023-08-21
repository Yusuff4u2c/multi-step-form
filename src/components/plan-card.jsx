/* eslint-disable react/prop-types */
const PlanCard = ({ plan, selected, onSelect, isYearly }) => {
  const handleSelection = () => {
    // set selected plan to plan
    onSelect && onSelect(plan);
  };

  const durationKey = isYearly ? "yearly" : "monthly";
  const planPostfix = isYearly ? "yr" : "mo";

  return (
    <div
      onClick={handleSelection}
      className={`card border ${
        selected ? "border-[#ac54ff] bg-[#fbf8ff]" : "border-[#9699ab]"
      } lg:h-44 w-full lg:w-44 rounded-xl hover:border-[#ac54ff] transition cursor-pointer`}
    >
      <div className="p-4 flex lg:flex-col lg:justify-between items-center lg:items-start h-full gap-4">
        <img className="w-10 h-10" src={plan.icon} alt={`${plan.name} icon`} />
        <div className="">
          <h1 className="font-bold text-[#02295a]">{plan.name}</h1>
          <p className="text-[#9699ab]">{`${plan.pricing[durationKey]}/${planPostfix}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
