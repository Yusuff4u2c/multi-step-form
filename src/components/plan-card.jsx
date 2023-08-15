const PlanCard = ({ plan, price, src, selected, onSelect }) => {
  const handleSelection = () => {
    // set selected plan to plan
    onSelect && onSelect(plan);
  };

  return (
    <div
      onClick={handleSelection}
      className={`card border ${
        selected ? "border-[#ac54ff] bg-[#fbf8ff]" : "border-[#9699ab]"
      } mb-10 h-28 lg:h-44 w-full lg:w-44 rounded-xl hover:border-[#ac54ff] transition cursor-pointer`}
    >
      <div className="p-4 flex lg:flex-col justify-between h-full">
        <img className="w-10 h-10" src={src} alt={`${plan} icon`} />
        <div className="">
          <h1 className="font-bold text-[#02295a]">{plan}</h1>
          <p className="text-[#9699ab]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
